import db from "../db/conn.js"

export const getClaims = async (req, res) => {
    let collection = await db.collection("projectexpenseclaims")
    const {EmployeeID} = req.body
    let query = {EmployeeID: (EmployeeID)};
    let results = await collection.find(query).toArray();

    res.send(results).status(200)
};

export const createClaims = async (req, res) => {
    let collection = await db.collection("projectexpenseclaims")
    let newClaims= req.body;
    let result = await collection.insertOne(newClaims);
    res.send(result).status(204);
};

export const updateClaims = async (req, res) => {
    const {claimID} = req.body.claimID
    const query = { ClaimID: (claimID) };
    const updates = {
    $push: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        date: req.body.date,
        purpose: req.body.purpose,
        claimAmount: req.body.claimAmount,
        currency: req.body.currency
    }
    };

    let collection = await db.collection("projectexpenseclaims");
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
};

export const deleteClaims = async (req,res) => {
    const {claimID} = req.body
    const query = { ClaimID: (claimID) };

    const collection = db.collection("projectexpenseclaims");
    let result = await collection.deleteOne(query);
  
    res.send(result).status(200);
};
