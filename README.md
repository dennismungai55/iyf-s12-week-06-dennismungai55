# Week 06 – JavaScript Weather Dashboard 🌦️

## Live Demo

[View My Weather Dashboard](https://dennismungai55.github.io/iyf-s12-week-06-dennismungai55/)

## About the Project

This project is part of the IYF S12 Weekend Academy JavaScript course.

It includes a responsive Weather Dashboard and practical JavaScript exercises covering Promises, async/await, Fetch API, error handling, and DOM manipulation.

## Weather Dashboard Features

- Search for weather by city name.
- Display temperature in Celsius.
- Show weather descriptions and icons.
- Display feels-like temperature.
- Display humidity, wind speed, and atmospheric pressure.
- Handle invalid city names and network errors.
- Show loading messages.
- Save the five most recent searches.
- Click recent searches to view weather again.

## Daily Challenges

Five JavaScript challenges completed:

| Day | Challenge | Concepts |
|---|---|---|
| Day 1 | Delayed Promise | Promises and setTimeout |
| Day 2 | Promise Chain | Promise chaining and timing |
| Day 3 | Error Handling | Fetch API and error handling |
| Day 4 | Rewrite with Async/Await | Async functions |
| Day 5 | Parallel Fetches | Promise.allSettled |

### Daily Challenges Folder

```text
daily-challenges/
├── day-1.js
├── day-2.js
├── day-3.js
├── day-4.js
└── day-5.js
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Promises
- Async/await
- Promise.allSettled()
- OpenWeatherMap API
- Local Storage
- Git and GitHub
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
├── README.md
├── .gitignore
│
├── daily-challenges/
│   ├── day-1.js
│   ├── day-2.js
│   ├── day-3.js
│   ├── day-4.js
│   └── day-5.js
│
└── .github/
    └── workflows/
        └── deploy.yml
```

## How to Run Locally

1. Clone this repository.
2. Open the project folder in VS Code.
3. Copy `config.example.js` and rename the copy to `config.js`.
4. Add your OpenWeatherMap API key to `config.js`:

```javascript
const API_KEY = "YOUR_API_KEY";
```

5. Open `index.html` using Live Server.

**Important:** Never upload `config.js` or your actual API key to GitHub.

## Running Daily Challenges

If Node.js is installed, run individual challenges using:

```bash
node daily-challenges/day-1.js
node daily-challenges/day-2.js
node daily-challenges/day-3.js
node daily-challenges/day-4.js
node daily-challenges/day-5.js
```

## What I Learned

- JavaScript variables and functions.
- Working with Promises.
- Promise chaining.
- Async/await.
- Promise.allSettled().
- Fetching data from external APIs.
- Error handling.
- DOM manipulation.
- Local Storage.
- Git and GitHub.
- GitHub Actions and GitHub Pages deployment.

## Author

Dennis Mungai

## License

This project was created for learning purposes as part of the IYF S12 Weekend Academy.
