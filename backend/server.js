const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "data.txt";

app.post("/write", (req, res) => {
  const { text } = req.body;
  fs.writeFile(FILE, text, (err) => {
    if (err) return res.status(500).send("Error writing file");
    res.send({ message: "Written successfully" });
  });
});

app.get("/read", (req, res) => {
  fs.readFile(FILE, "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading file");
    res.send({ text: data });
  });
});

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
