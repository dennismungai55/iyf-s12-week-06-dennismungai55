// Fetch data from an API
async function fetchData(url, name) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`${name} request failed`);
        }

        const data = await response.json();

        console.log(`${name} completed:`, data);

        return data;

    } catch (error) {
        console.error(`${name} failed:`, error.message);

        throw error;
    }
}

// Run three requests simultaneously
async function getAllData() {
    const requests = [
        fetchData(
            "https://jsonplaceholder.typicode.com/users/1",
            "Users"
        ),

        fetchData(
            "https://jsonplaceholder.typicode.com/posts/1",
            "Posts"
        ),

        fetchData(
            "https://jsonplaceholder.typicode.com/comments/1",
            "Comments"
        )
    ];

    const results = await Promise.allSettled(requests);

    console.log("All requests finished!");

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Request ${index + 1}: Successful`);
        } else {
            console.log(`Request ${index + 1}: Failed`);
        }
    });
}

getAllData();