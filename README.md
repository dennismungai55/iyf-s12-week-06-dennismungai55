# Week 06 – JavaScript Weather Dashboard 🌦️

## Live Demo

[View My Weather Dashboard](https://dennismungai55.github.io/iyf-s12-week-06-dennismungai55/)

## About the Project

This project is a responsive Weather Dashboard built using HTML, CSS, and JavaScript.

It allows users to search for a city and view its current weather conditions using the OpenWeatherMap API.

## Features

- Search for weather by city name.
- Display temperature in Celsius.
- Show weather descriptions and icons.
- Display feels-like temperature.
- Display humidity, wind speed, and atmospheric pressure.
- Handle invalid city names and network errors.
- Show loading messages while fetching weather data.
- Save the five most recent searches.
- Click recent searches to view their weather again.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- OpenWeatherMap API
- Local Storage
- GitHub Actions
- GitHub Pages

## Project Structure

```text
iyf-s12-week-06-dennismungai55/
│
├── index.html
├── styles.css
├── app.js
├── config.example.js
├── async-practice.js
├── .gitignore
├── README.md
│
└── .github/
    └── workflows/
        └── deploy.yml
```

## How to Run Locally

1. Clone this repository.
2. Open the project folder in VS Code.
3. Copy `config.example.js` and rename the copy to `config.js`.
4. Open `config.js` and add your OpenWeatherMap API key:

```javascript
const API_KEY = "YOUR_API_KEY";
```

5. Open `index.html` using Live Server.

**Important:** Never upload `config.js` or your actual API key to GitHub.

## API Configuration for GitHub Pages

The deployed website uses GitHub Actions to create `config.js` from a repository secret.

Repository secret name:

`OPENWEATHER_API_KEY`

The workflow deploys the website to GitHub Pages.

## What I Learned

- JavaScript variables and functions.
- Working with asynchronous JavaScript.
- Promises and async/await.
- Fetching data from external APIs.
- Handling errors and loading states.
- DOM manipulation.
- Local Storage.
- Git and GitHub.
- GitHub Actions and GitHub Pages deployment.

## Author

Dennis Mungai

## License

This project was created for learning purposes as part of the IYF S12 Weekend Academy.
