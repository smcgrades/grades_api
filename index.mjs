import express from "express";
import cors from "cors";
import "./loadEnviroment.mjs";
import semester from "./routes/semester.mjs";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/semester", semester);

app.listen(PORT, () => {
  console.log(`SMC Gades API listening at: ${PORT}`);
});