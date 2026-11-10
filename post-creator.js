// ==========================================
// LESSON 12 - TASK 12.3
// POST REQUESTS
// ==========================================

// Get HTML elements
const form = document.getElementById("post-form");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const userIdInput = document.getElementById("userId");

const message = document.getElementById("message");
const result = document.getElementById("result");
const postDetails = document.getElementById("post-details");
const submitButton = document.getElementById("submit-button");

// Function to create a post
async function createPost(title, body, userId) {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title,
                body,
                userId
            })
        }
    );

    if (!response.ok) {
        throw new Error("Failed to create post");
    }

    return response.json();
}

// Handle form submission
form.addEventListener("submit", async function(event) {
    event.preventDefault();

    // Get values from the form
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
    const userId = Number(userIdInput.value);

    if (!title || !body || !Number.isInteger(userId) || userId < 1) {
        message.textContent = "Please enter valid information.";
        return;
    }

    try {
        message.textContent = "Creating your post...";
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";

        // Send POST request
        const newPost = await createPost(title, body, userId);

        // Display the result
        postDetails.innerHTML = "";

        const id = document.createElement("p");
        id.textContent = `Post ID: ${newPost.id}`;

        const postTitle = document.createElement("p");
        postTitle.textContent = `Title: ${newPost.title}`;

        const postBody = document.createElement("p");
        postBody.textContent = `Content: ${newPost.body}`;

        const postUser = document.createElement("p");
        postUser.textContent = `User ID: ${newPost.userId}`;

        postDetails.append(id, postTitle, postBody, postUser);

        result.classList.remove("hidden");
        message.textContent = "Post created successfully!";

        form.reset();
        userIdInput.value = 1;

        console.log("Created:", newPost);

    } catch (error) {
        message.textContent = `Error: ${error.message}`;
        result.classList.add("hidden");

    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Create Post";
    }
});