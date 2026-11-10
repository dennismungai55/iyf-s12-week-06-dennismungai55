// Create a delay function
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

// Test the function
async function runDelay() {
    console.log("Waiting...");

    await delay(2000);

    console.log("This prints after 2 seconds");
}

runDelay();