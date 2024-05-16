import express from "express";

const app = express();

// Config ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.listen(8000, () => console.log("Server started"));
