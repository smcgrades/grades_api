import express from "express";
import db from "../db/connection.mjs";

const router = express.Router();

router.get("/:semester_year/", async (req, res) => {

  // res.send(req.params.semester_year);
  // console.log(req.params.returnSize);
  // let collectionName = req.params.semester_year;
  // let returnSize = parseInt(req.params.returnSize);

  let collection = await db.collection(collectionName);
  let results = await collection.find({}).limit().toArray();

  res.send(results).status(200);

});

export default router;
