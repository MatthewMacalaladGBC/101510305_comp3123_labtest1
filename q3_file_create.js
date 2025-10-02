// COMP3123, Lab Test 1
// Matthew Macalalad, 101510305
// Question 3: File Module (create files)

const fs = require("fs");
const path = require("path");

const logDirectory = path.join(process.cwd(), "logs");

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory)
    console.log("Directory created successfully. Creating log files...")
} else {
    console.log("Directory already exists")
}