# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Deployed app link

https://dailycurrentnewsapp.herokuapp.com/

### How this project made?

It is a simple react.js app. I have used news api to implement this app. The news api provides different type of news based on the topics we select. https://hn.algolia.com/api/v1/search?query={topicName}, this is the news api link which I used in my app.

### What this project does

When we run this app, it will first hit the api which has general topic. This is because we have written the fetch method in the componentDidMount() function. So whenever our app will load, componentDidMount() will also load. I have provided different topics on navbar and when we select the topic, we will get the news based on the topic.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

