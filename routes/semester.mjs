import express from "express";
import db from "../db/connection.mjs";
import return_courses from "../helper/return_courses.mjs";

const router = express.Router();

// GET /semester/:semester_year
router.get("/:semester_year", async (req, res) => {
  let collectionName = req.params.semester_year;

  let collection = await db.collection(collectionName);
  let results = await collection.find({}).limit(10).toArray();

  res.send(results).status(200);
});

// GET /semester/:semester_year/courses
router.get("/:semester_year/courses", async (req, res) => {
  let collectionName = req.params.semester_year;
  let projection = { Course: 1, _id: 0 };

  let collection = await db.collection(collectionName);
  let results = await collection.find({}).project(projection).toArray();

  results = return_courses(results);

  res.send(results).status(200);
});

export default router;
