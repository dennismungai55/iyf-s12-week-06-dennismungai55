// Return a promise instead of using a callback
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Dennis" });
        }, 1000);
    });
}

// Use async/await
async function displayUser() {
    try {
        console.log("Loading user...");

        const user = await getUser();

        console.log("User information:", user);

    } catch (error) {
        console.error("Error:", error);
    }
}

displayUser();