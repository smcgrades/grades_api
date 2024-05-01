import express from "express";
import db from "../db/connection.mjs";
// import return_courses from "../helper/return_courses.mjs";

const router = express.Router();

// GET /semester 
router.get('/', function(req, res) {
  res.render('pages/semester');
});

// GET /semester/:semester_year
router.get("/:semester_year", async (req, res) => {
  let collectionName = req.params.semester_year;

  let collection = await db.collection(collectionName);
  let results = await collection.find({}).toArray();

  res.send(results).status(200);
});

// GET /semester/:semester_year/courses
router.get("/:semester_year/courses", async (req, res) => {
  let collectionName = req.params.semester_year;
  let projection = { Course: 1, _id: 0 };

  let collection = await db.collection(collectionName);
  let results = await collection.find({}).project(projection).toArray();

  results = [...new Set(results.map((result) => result.Course))];

  res.send(results).status(200);
});

// GET /semester/:semester_year/courses/:course_name
router.get("/:semester_year/courses/:course_name", async (req, res) => {
  let collectionName = req.params.semester_year;
  let courseName = req.params.course_name;
  courseName = courseName.replace(/_/g, " ");

  let collection = await db.collection(collectionName);
  let results = await collection
    .find({
      Course: courseName,
    })
    .toArray();

  res.send(results).status(200);
});

// GET /semester/:semester_year/instructors
router.get("/:semester_year/instructors", async (req, res) => {
  let collectionName = req.params.semester_year;
  let projection = { Instructor: 1, _id: 0 };

  let collection = await db.collection(collectionName);
  let results = await collection.find({}).project(projection).toArray();

  results = [...new Set(results.map((result) => result.Instructor))];

  res.send(results).status(200);
});

// GET /semester/:semester_year/instructors/:instructor_name
router.get("/:semester_year/instructors/:instructor_name", async (req, res) => {
  let collectionName = req.params.semester_year;
  let instructorName = req.params.instructor_name;
  instructorName = instructorName.replace(/_/g, " ");

  let collection = await db.collection(collectionName);
  let results = await collection.find({
    Instructor: instructorName
  }).toArray();

  res.send(results).status(200);
});

export default router;
