const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        let word_arr = arr.filter(item => typeof item === "string");
        let lowercase_arr = word_arr.map(word => word.toLowerCase());
        if (lowercase_arr.length > 0) {
            resolve(lowercase_arr)
        } else {
            reject("There are no strings in the provided array.")
        }
    });
};

lowerCaseWords([10, 11, 12, "asdbg*asAJSFDd5af"])
    .then(result => console.log(result))
    .catch(err => console.log(err))