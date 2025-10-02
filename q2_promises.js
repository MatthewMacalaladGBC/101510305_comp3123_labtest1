// COMP3123, Lab Test 1
// Matthew Macalalad, 101510305
// Question 2: Promises

const resolvedPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({"message": "Delayed success!"});
    }, 500);
});

const rejectedPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
         reject({"error": "Delayed exception!"});
    }, 500);
});

resolvedPromise().then(console.log)
rejectedPromise().catch(err => console.log(err))