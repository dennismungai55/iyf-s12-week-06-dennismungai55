// Function that returns a random delay
function task1() {
    const time = Math.floor(Math.random() * 2000) + 1000;

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, time);
    });
}

function task2() {
    const time = Math.floor(Math.random() * 2000) + 1000;

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve();
        }, time);
    });
}

function task3() {
    const time = Math.floor(Math.random() * 2000) + 1000;

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve();
        }, time);
    });
}

// Measure total execution time
const startTime = performance.now();

task1()
    .then(() => task2())
    .then(() => task3())
    .then(() => {
        const endTime = performance.now();

        console.log(
            `All tasks completed in ${((endTime - startTime) / 1000).toFixed(2)} seconds`
        );
    })
    .catch((error) => {
        console.error("Something went wrong:", error);
    });