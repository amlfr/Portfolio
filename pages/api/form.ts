// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type responseData = {
    response: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<responseData>
) {
    const body = req.body;

    //Guard clause
    if (!body.fullname || !body.email || !body.subject || !body.message) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ response: "One empty field !" });
    }

    //Sends back success code
    res.status(200).json({ response: `${body.fullname} ${body.email}` });
}
