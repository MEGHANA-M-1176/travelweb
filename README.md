# Travel Project

A Node.js travel booking application with flight search and user registration functionality.

## Project Structure

```
travel-project/
├── node_modules/
├── public/
│   ├── index.html
│   └── users.json
├── package.json
├── package-lock.json
├── server.js
└── users.json
```

## Features

- Flight search functionality
- User registration system
- Admin panel to view registered users
- Static file serving for frontend
- CORS enabled for cross-origin requests

## Prerequisites

- Node.js (version compatible with the dependencies)
- npm (comes with Node.js)

## Installation

1. Clone or download the project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Start the server
```bash
npm start
```

### Development mode (with auto-restart)
```bash
npm run dev
```

The server will run on `http://localhost:3000`

## API Endpoints

### GET /api/test
- **Description**: Basic connectivity test
- **Response**: `{ "message": "Backend connected!" }`

### POST /api/search
- **Description**: Search for flights
- **Body**:
  ```json
  {
    "from": "Origin City",
    "to": "Destination City", 
    "departure": "2024-01-01"
  }
  ```
- **Response**: Array of flight results with mock data

### POST /api/register
- **Description**: Register a new user
- **Body**:
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "password"
  }
  ```
- **Response**: Registration confirmation or error message

### GET /api/admin/users
- **Description**: View all registered users (admin endpoint)
- **Response**: Array of all users

## Dependencies

- **cors**: ^2.8.5 - Enables Cross-Origin Resource Sharing
- **express**: ^5.1.0 - Web framework for Node.js
- **nodemon**: ^3.1.10 - Development tool for auto-restarting server

## Frontend

The frontend files are served from the `public` directory. Access the main application at `http://localhost:3000` after starting the server.

## Data Storage

User data is stored in `users.json` files. Currently using file-based storage with JSON format.

## Important Notes

- This is a development/demo application
- Passwords are stored in plain text (not suitable for production)
- No authentication middleware implemented
- Admin endpoint has no access control
- Uses mock data for flight search results

## Development

The project uses nodemon for development, which automatically restarts the server when files change. Use `npm run dev` to start in development mode.
