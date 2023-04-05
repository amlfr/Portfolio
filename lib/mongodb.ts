import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URL as string;
const options = {};

let client = new MongoClient(url, options);
let clientPromise: Promise<any> = client.connect();

export default clientPromise;
