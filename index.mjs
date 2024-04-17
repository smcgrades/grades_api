import express from "express";
import cors from "cors";
import "./loadEnviroment.mjs";
import semester from "./routes/semester.mjs";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// routes page
app.get('/routes', function(req, res) {
  res.render('pages/routes');
});

// semester page & api routes
app.use("/semester", semester);

app.listen(PORT, () => {
  console.log(`SMC Gades API listening at: ${PORT}`);
});