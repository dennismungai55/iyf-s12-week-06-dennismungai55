
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
            email: "dennis@example.com",
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


