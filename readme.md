# Book Catalog API (CRUD)

A book catalog project developed with Node.js, TypeScript, and Serverless for learning purposes.

## 📌 Project Overview
This project is a RESTful API that allows users to manage a personal book catalog through standard CRUD operations. It runs completely serverless and can be tested locally using Serverless Offline.

---

## 🛠️ Technologies & Tools
* *Node.js* & *TypeScript*
* *Serverless Framework* (AWS Lambda / API Gateway emulation)
* *Serverless Offline* (For local development)
* *Swagger* (For API interactive documentation)

---

## 🗺️ API Routes (CRUD Specification)

| Method | Endpoint | Description | Input (Request) | Output (Response) |
| :--- | :--- | :--- | :--- | :--- |
| *POST* | /books | Create a new book | *Body (JSON):* { "title": "string", "author": "string", "pages": number } | *201 Created:* { "id": "uuid", "title": "string", ... } |
| *GET* | /books | List all books | *None* | *200 OK:* [ { "id": "uuid", ... }, ... ] |
| *GET* | /books/{id} | Get a specific book by ID | *Path Parameter:* id | *200 OK:* { "id": "uuid", ... } or *404 Not Found* |
| *PUT* | /books/{id} | Update book details | *Path Parameter:* id<br>*Body (JSON):* { "title": "string", ... } | *200 OK:* { "id": "uuid", updated data } |
| *DELETE* | /books/{id} | Remove a book from catalog | *Path Parameter:* id | *200 OK:* { "message": "Book deleted successfully" } |

---

## 📄 API Documentation (Swagger)
Once the project is running, you can access the interactive Swagger UI to test the endpoints directly from your browser:
* *URL:* http://localhost:3000/dev/swagger (or configured local port)

---

## 🚀 How to Setup (Initial Steps)

### 1. Initialize Node.js & TypeScript
Run these commands in your project terminal to start the environment:
bash
# Initialize package.json
npm init -y

# Install TypeScript and types as dev dependencies
npm install -D typescript @types/node ts-node

# Initialize TypeScript configuration configuration
npx tsc --init


### 2. Install Serverless & Offline Plugin
bash
# Install Serverless Framework globally (if not installed)
npm install -g serverless

# Install the serverless offline and typescript plugins locally
npm install -D serverless-offline serverless-plugin-typescript