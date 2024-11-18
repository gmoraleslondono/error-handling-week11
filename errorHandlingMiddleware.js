// error handling in middleware in express
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to our API");
});

app.get("/reservation", (req, res) => {
  throw new Error("Something went wrong!");
});

app.use((error, req, res, next) => {
  console.error(error.message);
  res.status(500).json("Internal server error!");
});

// error responses in APIs
app.get("/data", (req, res) => {
  try {
    throw new Error("Database is down!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
