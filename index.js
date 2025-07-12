const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

let counter = 0;

if (fs.existsSync("counter.txt")) {
  counter = parseInt(fs.readFileSync("counter.txt"));
}

app.get("/count", (req, res) => {
  counter++;
  fs.writeFileSync("counter.txt", counter.toString());
  res.json({ count: counter });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
