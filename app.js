import express from "express";

const app = express();

// Config ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res, next) => {
  // Render is available to us thanks to ejs
  res.render("index", {
    title: "Welcome",
    message: "This is rendered via EJS",
    people: ["John", "Jane", "Jim", "Bob"],
  });
});

// http://localhost:8000/
app.listen(8000, () => console.log("Server started"));
