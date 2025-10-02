// COMP3123, Lab Test 1
// Matthew Macalalad, 101510305
// Question 3: File Module (remove files)

const fs = require("fs");
const path = require("path");

const logDirectory = path.join(process.cwd(), "logs");

if (fs.existsSync(logDirectory)) {
    const files = fs.readdirSync(logDirectory);
    files.forEach((file) => {
            console.log(`Deleting file ${file}...`);
    });
    fs.rmSync(logDirectory, { recursive: true });
    console.log("Directory and its contents deleted successfully.")
} else {
    console.log("Directory does not exist.")
}