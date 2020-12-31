const express = require("express");
const app = express();

// Import Routes
const excerciseRoute = require("./routes/excercise");
const usersRoute = require("./routes/users");
// Middleware
app.use(express.json())
app.use("/excercises",excerciseRoute);
app.get("/",(req,res) => res.send("Hello"))

app.listen(3000,() => console.log("Server has started"))