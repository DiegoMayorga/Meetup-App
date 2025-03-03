import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export async function mongoConnection() {
  try {
    const client = await MongoClient.connect(MONGO_URI);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    return { meetupsCollection, client };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Database connection failed");
  }
}
