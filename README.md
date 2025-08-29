# Overview
The Company Listing Application is a web-based platform designed to facilitate the discovery and application process for job seekers looking to connect with various companies.

# Features
- User Authentication: Users can sign up and sign in to access the application.
- Company Listings: Users can view detailed information about various companies.
- Application Submission: Users can apply to companies directly through the application.
- Admin Controls: Admin users can manage company listings and user account

# Technology Stack
- Backend: Node.js, Express
- Database: MongoDB (via Mongoose)
- Authentication: JSON Web Tokens (JWT)
- Environment Variables: dotenv for managing configuration

# Prerequisites
 Before you begin, ensure you have the following installed:
  - Node.js (v14 or higher)
  - MongoDB (local or cloud instance)
  - npm (Node package manager)

# Installation
  1. Clone the Repository
     git clone <repository-url>
     cd <repository-directory>

  2. Install Dependencies
    Navigate to the backend directory and install the required packages:
    cd backend
    npm install

  3. Set Up Environment Variables  
    Create a .env file in the backend directory and add your MongoDB connection string and JWT secret:
    DB_URL=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret>

  4. Start the Server
    Run the server using Node:
    npm start

The server will start on port 3200 by default.

# API Endpoints

 User Authentication
  - Sign Up: POST /api/user/signup
  - Sign In: POST /api/user/signin
  - Get Current User: GET /api/user/me (Requires JWT)

Company Listings
  - Get All Companies: GET /api/company
  - Add Company: POST /api/company (Requires Admin privileges)
  - Update Company: PUT /api/company/:compId (Requires Admin privileges)
  - Delete Company: DELETE /api/company/:compId (Requires Admin privileges)

Middleware
The application uses JWT for authentication. Ensure that you include a valid token in the Authorization header when accessing protected routes.

    
