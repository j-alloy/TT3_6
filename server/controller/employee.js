import db from "../db/conn.js";

export const employee = async (req, res) => {

  let collection = await db.collection("employee");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);

  try {
  } catch (error) {
    res.status(500).json({ message: "Something when wrong!!!" });
  }
};
