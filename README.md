# NUS ISS Software Engineering (IBF2021) Final Project

--- 

## About 🧻 Trading App
This application allows you to try out crytomarket paper trading. The application only shows 9 cryptocurrency tokens due to the limitation of the API calls. To begin using the app, please register an account at the homepage. 

Once successfully registered, you will receive a notification email from the us. Your account will be loaded with *$10,000* by default. Log in with your username and password and start investing away.

--- 

## Deployment Instruction

1) Clone the repository. 
2) Run `npm install` in the client folder to install the necessary npm modules.
3) Set up the database in your machine by running the `schema.sql` file in MySQL Workbench. There will be two users that are created which can be used to test the app. Configure the applications.properties files accordingly. 


---

## API Used in this Application

### 1) RapidAPI CoinAPI

This API is used to retrieve the latest price of the crytocurrency tokens. Please note that the free version only allows *100* API calls per day. 

You can request for a free API [here](https://rapidapi.com/coinapi/api/coinapi-rest/).



### 2) Google Map API
---
This API is used to embed Google Maps on the front end application. 

You can request for access to Google Maps API from [Google Cloud Platform](https://cloud.google.com/).
