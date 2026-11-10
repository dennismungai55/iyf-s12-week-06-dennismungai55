
// ==========================================
// LESSON 11 - TASK 11.1
// EXERCISE 1: SYNCHRONOUS VS ASYNCHRONOUS
// ==========================================

// Synchronous
console.log("1 - Start");
console.log("2 - Middle");
console.log("3 - End");

// Asynchronous
console.log("1 - Start");

setTimeout(() => {
    console.log("2 - This is delayed");
}, 2000);

console.log("3 - End");

// Predict the output
console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

setTimeout(() => console.log("D"), 100);

console.log("E");

ANSWER

A
C
E
B
D


// ==========================================
// EXERCISE 2: CALLBACK PATTERN
// ==========================================

// Simulate fetching data
function fetchData(callback) {
    setTimeout(() => {
        const data = {
            name: "John",
            age: 30
        };

        callback(data);
    }, 1000);
}

// Call fetchData
fetchData(function(data) {
    console.log("Data received:", data);
});


// ==========================================
// BUILD: LOAD USER DATA
// ==========================================

function loadUser(userId, callback) {

    console.log("Loading user data...");

    // Simulate a 1.5-second database lookup
    setTimeout(() => {

        const user = {
            id: userId,
            name: "Dennis",
            email: "mungaidennis962@gmail.com",
            age: 21
        };

        callback(user);

    }, 1500);
}

// Test the function
loadUser(1, function(user) {
    console.log("User loaded successfully!");
    console.log("User ID:", user.id);
    console.log("Name:", user.name);
    console.log("Email:", user.email);
    console.log("Age:", user.age);
});


// ==========================================
// TASK 11.2 - EXERCISE 1
// EXPERIENCE CALLBACK HELL
// ==========================================

function getUserData(userId, callback) {
    setTimeout(() => {
        callback({ id: userId, name: "John" });
    }, 1000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, title: "Post 1" },
            { id: 2, title: "Post 2" }
        ]);
    }, 1000);
}

function getPostComments(postId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, text: "Great post!" },
            { id: 2, text: "Thanks for sharing" }
        ]);
    }, 1000);
}

// Callback Hell
getUserData(1, function(user) {
    console.log("User:", user);

    getUserPosts(user.id, function(posts) {
        console.log("Posts:", posts);

        getPostComments(posts[0].id, function(comments) {
            console.log("Comments:", comments);
        });
    });
});



// ==========================================
// EXERCISE 2: PROMISES
// ==========================================

const myPromise = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
        if (success) {
            resolve("It worked!");
        } else {
            reject("Something went wrong");
        }
    }, 1000);
});

myPromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });


// ==========================================
// EXERCISE 3: PROMISE-BASED FUNCTIONS
// ==========================================

// 1. Get user data
function getUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: "John"
                });
            } else {
                reject("Invalid user ID");
            }
        }, 1000);
    });
}

// 2. Get user posts
function getUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve([
                    { id: 1, title: "Post 1" },
                    { id: 2, title: "Post 2" }
                ]);
            } else {
                reject("Invalid user ID");
            }
        }, 1000);
    });
}

// 3. Get post comments
function getPostComments(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (postId > 0) {
                resolve([
                    { id: 1, text: "Great post!" },
                    { id: 2, text: "Thanks for sharing" }
                ]);
            } else {
                reject("Invalid post ID");
            }
        }, 1000);
    });
}



// ==========================================
// CONNECTING PROMISES
// ==========================================

getUserData(1)
    .then(user => {
        console.log("User:", user);
        return getUserPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return getPostComments(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(error => {
        console.log("Error:", error);
    });



// ==========================================
// TASK 11.3: PROMISE CHAINING
// ==========================================

// Simulated user data
function getUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId < 1) {
                reject("Invalid user ID");
            } else {
                resolve({
                    id: userId,
                    name: `User ${userId}`,
                    email: `user${userId}@example.com`
                });
            }
        }, 500);
    });
}

// Simulated posts
function getUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: userId * 10 + 1, title: "Learning JavaScript" },
                { id: userId * 10 + 2, title: "Understanding Promises" }
            ]);
        }, 500);
    });
}

// Simulated comments
function getPostComments(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: `Great post ${postId}!` },
                { id: 2, text: "Very informative!" }
            ]);
        }, 500);
    });
}


// ==========================================
// EXERCISE 1: PROMISE CHAINING
// ==========================================

console.log("EXERCISE 1: PROMISE CHAINING");

getUserData(1)
    .then(user => {
        console.log("User:", user);
        return getUserPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return getPostComments(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(error => {
        console.error("Error:", error);
    });


// ==========================================
// EXERCISE 2: PROMISE.ALL
// ==========================================

console.log("EXERCISE 2: PROMISE.ALL");

const promise1 = getUserData(1);
const promise2 = getUserData(2);
const promise3 = getUserData(3);

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All users:", results);
    })
    .catch(error => {
        console.error("One failed:", error);
    });


// ==========================================
// EXERCISE 3: PROMISE.RACE
// ==========================================

console.log("EXERCISE 3: PROMISE.RACE");

const fast = new Promise(resolve => {
    setTimeout(() => resolve("Fast!"), 100);
});

const slow = new Promise(resolve => {
    setTimeout(() => resolve("Slow!"), 500);
});

Promise.race([fast, slow])
    .then(result => {
        console.log("Winner:", result);
    });


// ==========================================
// MINI-PROJECT: FETCH 3 USERS SIMULTANEOUSLY
// ==========================================

console.log("MINI-PROJECT: THREE USERS");

function fetchThreeUsers() {
    Promise.all([
        getUserData(1),
        getUserData(2),
        getUserData(3)
    ])
    .then(users => {
        console.log("ALL THREE USERS LOADED!");

        // Display all users together
        console.table(users);
    })
    .catch(error => {
        console.error("Failed to fetch users:", error);
    });
}

// Start the mini-project
fetchThreeUsers();



// ==========================================
// TASK 11.4: ASYNC / AWAIT
// ==========================================


// EXERCISE 1: CONVERT PROMISES TO ASYNC/AWAIT

console.log("EXERCISE 1: ASYNC/AWAIT");

async function getDataWithAsync() {
    const user = await getUserData(1);
    console.log("User:", user);

    const posts = await getUserPosts(user.id);
    console.log("Posts:", posts);

    const comments = await getPostComments(posts[0].id);
    console.log("Comments:", comments);

    return comments;
}

// Run the function
getDataWithAsync()
    .then(comments => {
        console.log("Final comments:", comments);
    })
    .catch(error => {
        console.error("Error:", error);
    });


// EXERCISE 2: ERROR HANDLING WITH TRY/CATCH

console.log("EXERCISE 2: TRY/CATCH");

async function fetchUserData(userId) {
    try {
        const user = await getUserData(userId);
        const posts = await getUserPosts(user.id);

        return { user, posts };

    } catch (error) {
        console.error("Failed to fetch:", error);
        throw error;
    }
}

// Run the function
fetchUserData(1)
    .then(result => {
        console.log("User data:", result);
    })
    .catch(error => {
        console.log("Something went wrong:", error);
    });


// EXERCISE 3: PARALLEL WITH ASYNC/AWAIT

console.log("EXERCISE 3: PARALLEL REQUESTS");

async function getAllUsers() {
    try {
        const [user1, user2, user3] = await Promise.all([
            getUserData(1),
            getUserData(2),
            getUserData(3)
        ]);

        return [user1, user2, user3];

    } catch (error) {
        console.error("Failed to get users:", error);
        throw error;
    }
}

// Run the function
getAllUsers()
    .then(users => {
        console.log("All users:", users);
        console.table(users);
    })
    .catch(error => {
        console.error("Error:", error);
    });


// ==========================================
// MINI-PROJECT: REWRITE CALLBACK HELL
// USING ASYNC/AWAIT
// ==========================================

console.log("MINI-PROJECT: CALLBACK HELL REFACTOR");

async function getCompleteUserData(userId) {
    try {
        // Step 1: Get user
        const user = await getUserData(userId);
        console.log("User:", user);

        // Step 2: Get user's posts
        const posts = await getUserPosts(user.id);
        console.log("User posts:", posts);

        // Step 3: Get comments on first post
        const comments = await getPostComments(posts[0].id);
        console.log("Post comments:", comments);

        // Return everything together
        return {
            user: user,
            posts: posts,
            comments: comments
        };

    } catch (error) {
        console.error("Failed to load complete data:", error);
    }
}

// Run the mini-project
async function main() {
    const result = await getCompleteUserData(1);

    console.log("COMPLETE RESULT:", result);
}

main();


