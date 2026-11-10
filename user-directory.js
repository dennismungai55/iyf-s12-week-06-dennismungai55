// ==========================================
// LESSON 12 - TASK 12.4
// SEARCH AND FILTER USERS
// ==========================================

let allUsers = [];

// Get HTML elements
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const container = document.getElementById("users-container");

const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const cityFilter = document.getElementById("city-filter");
const resultCount = document.getElementById("result-count");

// Fetch users from API
async function fetchUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
}

// Display users
function displayUsers(users) {
    container.innerHTML = "";

    resultCount.textContent = `${users.length} user(s) found`;

    if (users.length === 0) {
        container.textContent = "No users found.";
        return;
    }

    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("user-card");

        const name = document.createElement("h2");
        name.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = `Email: ${user.email}`;

        const company = document.createElement("p");
        company.textContent = `Company: ${user.company.name}`;

        const city = document.createElement("p");
        city.textContent = `City: ${user.address.city}`;

        card.append(name, email, company, city);
        container.appendChild(card);
    });
}

// Populate city dropdown
function populateCities(users) {
    const cities = [...new Set(
        users.map(user => user.address.city)
    )];

    cities.sort();

    cities.forEach(city => {
        const option = document.createElement("option");

        option.value = city;
        option.textContent = city;

        cityFilter.appendChild(option);
    });
}

// Search, sort and filter
function applyFilters() {
    const query = searchInput.value.toLowerCase().trim();
    const selectedCity = cityFilter.value;
    const sortOrder = sortSelect.value;

    // Start with all users
    let filteredUsers = [...allUsers];

    // Search by name or email
    filteredUsers = filteredUsers.filter(user =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );

    // Filter by city
    if (selectedCity !== "all") {
        filteredUsers = filteredUsers.filter(user =>
            user.address.city === selectedCity
        );
    }

    // Sort by name
    filteredUsers.sort((a, b) => {
        return sortOrder === "az"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
    });

    // Display final results
    displayUsers(filteredUsers);
}

// Initialize application
async function init() {
    try {
        loading.classList.remove("hidden");

        allUsers = await fetchUsers();

        populateCities(allUsers);
        applyFilters();

    } catch (error) {
        errorDiv.textContent = `Error: ${error.message}`;
        errorDiv.classList.remove("hidden");

    } finally {
        loading.classList.add("hidden");
    }
}

// Listen for user actions
searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);
cityFilter.addEventListener("change", applyFilters);

// Start application
init();