import express from "express";
import cors from "cors";
import "./loadEnviroment.js";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${port}`);
});