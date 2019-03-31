# Wing It
*Makers Final Project*
Authors: Isabel Cooper, Tom Damant, Szilvi Horvath, Chloe Montgomery

The problem we wanted to solve was the pain of organising group trips. 
As the organiser of a trip, you face 2 problems:
1. You have to nag everyone to do things - and no one wants to be that person.
2. It’s tricky to show that you’re taking lots of opinions into account for the big decisions.

So we made an app to collect and centralise the information and send reminders for key decisions and actions you need the group to take.

The application is written in JavaScript, and we used Postgres, Express, Node JS, jQuery. Tested with Jest and Puppeteer and deployed on Heroku.


## To set up locally:

### Create DB:

```
CREATE DATABASE planning;
```
Create trips table:
```
CREATE TABLE trips (id SERIAL PRIMARY KEY, name VARCHAR(60), description VARCHAR, organiser INTEGER);
```
Create stages tables:
```
CREATE TABLE stages (id SERIAL PRIMARY KEY, name VARCHAR, content VARCHAR, due_date DATE, event_id INTEGER);
```
Create users table:
```
CREATE TABLE users (id SERIAL PRIMARY KEY, first_name VARCHAR, last_name VARCHAR, email VARCHAR, phone_number VARCHAR, password VARCHAR);
```
Create polls table:
```
CREATE TABLE polls (id SERIAL PRIMARY KEY, type VARCHAR, options VARCHAR, deadline DATE, trip_id INTEGER REFERENCES trips (id), stage_id INTEGER REFERENCES stages (id));
```

Create trips_users table:

```
create table trips_users (id SERIAL PRIMARY KEY, trip_id INTEGER REFERENCES trips (id), user_id INTEGER REFERENCES users (id));
```

Create stages_users table:

```
CREATE TABLE stages_users (id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users (id), stage_id INTEGER REFERENCES stages (id));
```
Create votes table:

```
CREATE TABLE votes (id SERIAL PRIMARY KEY, trip_id INTEGER REFERENCES trips (id), poll_id INTEGER REFERENCES polls (id), user_id INTEGER REFERENCES users (id), option_id VARCHAR, stage_id INTEGER REFERENCES stages (id));
```

Create comments table:

```
CREATE TABLE comments (id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users (id), comment VARCHAR, date TIMESTAMP DEFAULT NOW(), announcement BOOL, trip_id INTEGER REFERENCES trips (id));
```


