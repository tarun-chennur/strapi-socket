# strapi-socket

A simple Strapi setup with a websocket server that logs messages, utilizes postgresql as the DB.


# Start project
1. Install required packages:
```
npm i 
```
2. Populate .env with the required variables, use .env.example as a reference.
3. Install Postgresql, create a Table, add Database credentials and Database name to the .env file.

4. Run Strapi server on http://localhost:1337:
```
npm run develop
```
5. Login with the following credentials:
```
username:test12@gmail.com
password:Test12test12
```
6. Start the websocket server:
```
node socket.js
```
7. Laumch the html page to send a message or alternatively use Postman to make a ws request to the server directly:
```
http://localhost:8000/ or ws://localhost:8000
```
