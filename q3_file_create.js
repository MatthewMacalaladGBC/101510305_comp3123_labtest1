// COMP3123, Lab Test 1
// Matthew Macalalad, 101510305
// Question 3: File Module (create files)

const fs = require("fs");
const path = require("path");

const logDirectory = path.join(process.cwd(), "logs");

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory)
    process.chdir(logDirectory)
    console.log("Directory created successfully. Creating log files...")
    process.chdir(logDirectory);
    for (let i = 1; i <= 10; i++) {
        let fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}.`);
        console.log(`File created: ${fileName}`);
    }
} else {
    console.log("Directory already exists.")
}