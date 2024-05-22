# Teaclub-backend

This is backend project on NodeJs and ExpressJs with NoSQL database 

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Introduction

This project is developed using Node.js and Express, utilizing a NoSQL database (MongoDB). It is designed for the famous stall 'Tea Club' to manage their database effectively. The application provides several APIs to facilitate the retrieval and storage of data, ensuring smooth operations for managing orders, inventory, and customer information. This backend service enables 'Tea Club' to streamline their data handling processes and improve overall efficiency.


## Features

List the main features of your project. For example:
- CRUD operations for a specific resource
- User authentication and authorization
- Data validation and error handling

## Technologies Used

- **MongoDB**: NoSQL database for storing data
- **Express**: Web framework for Node.js
- **Node.js**: JavaScript runtime environment
- **Mongoose**: ODM for MongoDB and Node.js

## Getting Started

Instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Varuni387/Teaclub-backend.git
2. Navigate to the directory:
   ```sh
   cd Teaclub-backend
3. Install the dependencies:
   ```sh
    npm install
### Usage

1. Start the development server
   ```sh
   npm start  
2.The server will run on the specified port. You can access it at http://localhost:9000


### API Endpoints

 **Owner Routes**

- **POST /api/OwnerModel**: Adds a new owner

 **Registration Routes**

- **POST /api/RegisterModel**: Adds a new registration to the application

 **Login Routes**

- **POST /api/LoginModel**: Adds a new login to the database
- **GET /api/LoginModel**: Fetches all the login information

 **Item Routes**

- **POST /api/ItemsModel**: Adds a new item
- **GET /api/items**: Fetches all the items from the database
- **DELETE /api/items/:itemName**: Deletes an item based on item name
- **PUT /api/items/:itemName**: Updates item details based on item name
