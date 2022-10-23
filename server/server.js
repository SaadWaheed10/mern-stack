import express from "express";
import mongoose from "mongoose";
import cors from "cors";

await mongoose.connect(
  "mongodb+srv://saadwaheed10:saad1234@mern-stack.zgu6uot.mongodb.net/?retryWrites=true&w=majority"
);
console.log("mongoDB Connection is Successful");

const app = express();
const PORT = 4000;

app.use(cors);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running on port http://localhost:4000");
});
