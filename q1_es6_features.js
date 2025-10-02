// COMP3123, Lab Test 1
// Matthew Macalalad, 101510305
// Question 1: ES6 Features

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        let string_arr = arr.filter(item => typeof item === "string");
        let lowercase_arr = string_arr.map(word => word.toLowerCase());
        if (lowercase_arr.length > 0) {
            resolve(lowercase_arr)
        } else {
            reject("There are no strings in the provided array.")
        }
    });
};

lowerCaseWords(["PIZZA", 10, true, 25, false, "Wings"])
    .then(result => console.log(result))
    .catch(err => console.log(err))