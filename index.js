import express from "express";
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/twitter", (req, res) => {
    res.send('<h1>Twitter.com</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
