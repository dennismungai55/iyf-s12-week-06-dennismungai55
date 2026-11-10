async function fetchUser(userId) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        if (response.status === 404) {
            console.log("User not found. Returning default user.");

            return {
                id: userId,
                name: "Default User",
                email: "default@example.com"
            };
        }

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        const user = await response.json();

        return user;

    } catch (error) {
        console.error("Error:", error.message);

        return {
            id: userId,
            name: "Default User",
            email: "default@example.com"
        };
    }
}

// Test with an existing user
fetchUser(1).then(console.log);

// Test with a user that does not exist
fetchUser(999).then(console.log);