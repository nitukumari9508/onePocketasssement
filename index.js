const express = require("express")

const app = express()
// to parse the data in json format
app.use(express.json())
const routes = require("./src/routes/route")
const { sumOfArray } = require("./src/routes/controller/task2")
const { counWords } = require("./src/routes/controller/task3")
app.use("/", routes)

app.listen(3000, () => {
    console.log("server is running on port 3000")
})
// Task 2: Data Manipulation

// Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.








