const express = require("express");
const path = require("path");
const sound = require("sound-play");

const app = express();
const port = 4000;
const IP = require("ip");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/silence", (req, res) => {
  console.log("silence");
  sound.play(path.join(__dirname, "siren.wav"));
});

app.listen(port, () => {
  console.log(`${IP.address()}:${port}`);
});
