
// ==========================================
// LESSON 12 - TASK 12.1
// FETCH API BASICS
// ==========================================


// EXERCISE 1: YOUR FIRST FETCH

console.log("EXERCISE 1: YOUR FIRST FETCH");

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        console.log("Response object:", response);
        console.log("Status:", response.status);
        console.log("OK:", response.ok);

        return response.json();
    })
    .then(data => {
        console.log("User data:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });


// EXERCISE 2: FETCH WITH ASYNC/AWAIT

console.log("EXERCISE 2: ASYNC/AWAIT");

async function getUser(id) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error("Failed to fetch user:", error);
    }
}

async function main() {
    const user = await getUser(1);
    console.log("Async/Await user:", user);
}


// EXERCISE 3: FETCH ALL USERS

async function getAllUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();

        console.log("All users:", users);
        console.table(users);

        return users;

    } catch (error) {
        console.error("Failed to fetch users:", error);
    }
}


// EXERCISE 4: FETCH POSTS FOR USER 1

async function getUserPosts(userId) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}/posts`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const posts = await response.json();

        console.log("User posts:", posts);
        console.table(posts);

        return posts;

    } catch (error) {
        console.error("Failed to fetch posts:", error);
    }
}


// RUN ALL EXERCISES

async function runFetchExercises() {
    await main();
    await getAllUsers();
    await getUserPosts(1);

    console.log("ALL LESSON 12 EXERCISES COMPLETED!");
}

runFetchExercises();
