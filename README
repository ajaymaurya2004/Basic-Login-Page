## Project Title
# Basic-Login-Page

# Full Stack Login Authentication System

## Project Overview

This is a full stack web application that implements a secure user authentication system.

The project uses:

Frontend: React

Backend: Flask

Database: SQLite

Authentication: JWT (JSON Web Token)

The system allows users to:

Register a new account

Log in with credentials

Receive a JWT token

Access a protected dashboard route

## Project Architecture
React (Frontend)
        ↓ REST API Calls
Flask (Backend API)
        ↓
SQLite Database

## Technologies Used
Frontend

React JS

Axios (for API communication)

Vite (development server)

Backend

Flask

Flask-SQLAlchemy (ORM)

Flask-JWT-Extended (authentication)

Flask-CORS

Database

SQLite (lightweight file-based database)

## Application Workflow
1. User Registration

The user submits a username and password.

The backend validates and stores the data in the database.

2. User Login

The user submits login credentials.

The backend verifies the credentials.

A JWT access token is generated.

The token is stored in the browser (localStorage).

3. Protected Dashboard Access

The frontend sends the JWT token in the request header:

Authorization: Bearer <token>

The backend verifies the token.

If valid, it returns protected user data.

## Security Concepts Implemented

Token-based authentication (JWT)

Protected API routes

CORS handling

ORM-based database management