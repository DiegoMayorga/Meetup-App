import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    /* const { title, image, address, description } = data; */

    const client = await MongoClient.connect(
      "mongodb+srv://diegomayorga:x8YxwinFIMQzzTEF@cluster0.qq16c.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
