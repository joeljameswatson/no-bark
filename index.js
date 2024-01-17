const express = require("express");
const path = require("path");
var player = require('play-sound')(opts = {});

const app = express();
const port = 4000;
const IP = require("ip");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/ringing", (req, res) => {
  player.play(path.join(__dirname, "ringing.wav"), function(err){
    if (err) throw err
  })
});

app.post("/siren", (req, res) => {
  player.play(path.join(__dirname, "siren.wav"), function(err){
    if (err) throw err
  })
});

app.post("/high_pitch", (req, res) => {
  player.play(path.join(__dirname, "high_pitch.wav"), function(err){
    if (err) throw err
  })
});

app.post("/psst", (req, res) => {
  player.play('psst.wav', function(err){
    if (err) throw err
  })
});

app.listen(port, () => {
  console.log(`${IP.address()}:${port}`);
});
