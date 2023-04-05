import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

let client = new MongoClient(uri);
let clientPromise: Promise<any> = client.connect();

export default clientPromise;
