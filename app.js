// ==========================================
// WEATHER DASHBOARD
// ==========================================

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// DOM Elements
const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const weatherDisplay = document.getElementById("weather-display");
const searchHistory = document.getElementById("search-history");

// Weather display elements
const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");

// Fetch weather information
async function getWeather(city) {
    if (typeof API_KEY === "undefined" || !API_KEY.trim()) {
        showError("API key missing. Check your config.js file.");
        return;
    }

    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    try {
        showLoading();
        hideError();

        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found. Check the spelling.");
            }

            if (response.status === 401) {
                throw new Error("API key is invalid or not activated yet.");
            }

            throw new Error("Unable to get weather information.");
        }

        const data = await response.json();

        displayWeather(data);
        saveToHistory(data.name);

    } catch (err) {
        if (err.name === "TypeError") {
            showError("Network error. Check your internet connection.");
        } else {
            showError(err.message);
        }

    } finally {
        hideLoading();
    }
}

// Display weather information
function displayWeather(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;

    const iconCode = data.weather[0].icon;

    weatherIcon.src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherIcon.alt = data.weather[0].description;

    temperature.textContent =
        `${Math.round(data.main.temp)}°C`;

    description.textContent =
        data.weather[0].description;

    feelsLike.textContent =
        `${Math.round(data.main.feels_like)}°C`;

    humidity.textContent =
        `${data.main.humidity}%`;

    wind.textContent =
        `${data.wind.speed} m/s`;

    pressure.textContent =
        `${data.main.pressure} hPa`;

    weatherDisplay.classList.remove("hidden");
}

// Show loading message
function showLoading() {
    loading.classList.remove("hidden");
    weatherDisplay.classList.add("hidden");
}

// Hide loading message
function hideLoading() {
    loading.classList.add("hidden");
}

// Show errors
function showError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
}

// Hide errors
function hideError() {
    error.classList.add("hidden");
}

// Save recent searches
function saveToHistory(city) {
    let recent = [];

    try {
        recent = JSON.parse(localStorage.getItem("recent")) || [];

        if (!Array.isArray(recent)) {
            recent = [];
        }
    } catch {
        recent = [];
    }

    // Remove duplicates
    recent = recent.filter(
        item => item.toLowerCase() !== city.toLowerCase()
    );

    // Add latest city at the beginning
    recent.unshift(city);

    // Keep only five cities
    recent = recent.slice(0, 5);

    localStorage.setItem("recent", JSON.stringify(recent));

    loadHistory();
}

// Load recent searches
function loadHistory() {
    searchHistory.innerHTML = "";

    let recent = [];

    try {
        recent = JSON.parse(localStorage.getItem("recent")) || [];

        if (!Array.isArray(recent)) {
            recent = [];
        }
    } catch {
        recent = [];
    }

    recent.forEach(city => {
        const li = document.createElement("li");
        const button = document.createElement("button");

        button.type = "button";
        button.textContent = city;

        button.addEventListener("click", () => {
            cityInput.value = city;
            getWeather(city);
        });

        li.appendChild(button);
        searchHistory.appendChild(li);
    });
}

// Handle search form
form.addEventListener("submit", event => {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (city) {
        getWeather(city);
    }
});

// Initialize application
loadHistory();