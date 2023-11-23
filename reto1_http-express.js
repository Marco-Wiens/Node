const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Peticion recibida del cliente");
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers["user-agent"]);
  res.status(200).json({ ok: "true", message: "Recibido!" });
});

app.get("/bye", (req, res) => {
  res.status(200).json({ ok: "true", message: "Adios!" });
});

app.listen(3000);