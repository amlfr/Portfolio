// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

type responseData = {
    response: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<responseData>
) {
    if (req.method === "POST") {
        const body = req.body;
        //Checking for all fields
        if (!body.fullname || !body.email || !body.subject || !body.message) {
            // Sends a HTTP bad request error code
            return res.status(400).json({ response: "One empty field !" });
        } else {
            try {
                const client = await clientPromise;
                const collection = client.db("test").collection("messages");

                return await collection.insertOne({
                    fullname: body.fullname,
                    email: body.email,
                    subject: body.subject,
                    message: body.message,
                });

                //Sends back success code
                res.status(200).json({
                    response: `Votre message a bien été transmis! Merci beaucoup`,
                });
            } catch (error: any) {
                return res.status(500).json({ response: error.toString() });
            }
        }
    } else {
        return res.status(405).json({ response: "Méthode non autorisée" });
    }
}
