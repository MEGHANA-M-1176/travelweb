# Travel Project

A simple travel booking application built with Node.js and Express that provides flight search functionality and user registration.

## Features

- **Flight Search**: Search for flights between destinations with departure dates
- **User Registration**: Register new users with email validation
- **Admin Panel**: View all registered users
- **CORS Support**: Cross-origin resource sharing enabled
- **Static File Serving**: Serves frontend files from the `public` directory

## Project Structure

```
travel-project/
├── node_modules/      # Installed dependencies
├── public/           # Frontend files (served statically)
│   ├── index.html    # Main HTML file
│   └── users.json    # Additional user data file
├── server.js         # Main server file
├── package.json      # Project dependencies and scripts
├── package-lock.json # Dependency lock file
└── users.json        # Main user data storage (JSON file)
```

## Prerequisites

- **Node.js** (version 18 or higher) - Required for Express 5.x compatibility
- **npm** (Node Package Manager) - For dependency management
- **Operating System**: Cross-platform (Windows, macOS, Linux)

### Version Compatibility
- Express 5.x requires Node.js 18+
- All dependencies are locked to specific versions via package-lock.json for consistent installations

## Installation

1. Clone or download the project files
2. Navigate to the project directory
3. Install dependencies (this will use the exact versions specified in package-lock.json):

```bash
npm install
```

**Note**: The package-lock.json ensures all team members and deployments use identical dependency versions, preventing "works on my machine" issues.

## Scripts

- `npm start` - Start the server in production mode
- `npm run dev` - Start the server in development mode with auto-restart (using nodemon)

## Usage

### Starting the Server

**Development mode (recommended for development):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:3000`

### API Endpoints

#### Test Connection
- **GET** `/api/test`
- Returns a simple message to verify backend connectivity

#### Flight Search
- **POST** `/api/search`
- **Body:**
  ```json
  {
    "from": "Origin City",
    "to": "Destination City", 
    "departure": "2024-01-15"
  }
  ```
- **Response:** Array of mock flight results with airline, price, and duration

#### User Registration
- **POST** `/api/register`
- **Body:**
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:** Success message or error if email already exists

#### Admin - View Users
- **GET** `/api/admin/users`
- **Response:** Array of all registered users

## Dependencies

### Production Dependencies
- **express** (^5.1.0) - Modern web framework for Node.js with enhanced features
- **cors** (^2.8.5) - Cross-Origin Resource Sharing middleware for handling cross-domain requests

### Development Dependencies
- **nodemon** (^3.1.10) - Development utility that automatically restarts the server when file changes are detected

### Key Dependency Details
The project uses Express 5.x which includes several modern features and improvements over Express 4.x:
- Enhanced error handling
- Improved router functionality
- Better TypeScript support
- Updated middleware architecture

Total package size includes approximately 50+ sub-dependencies for full functionality including:
- Body parsing capabilities
- Static file serving
- Cookie and session support
- Security enhancements
- File system monitoring (for nodemon)

## Data Storage

User data is stored in `users.json` file in the project root. This is a simple file-based storage solution suitable for development and small applications.

**Note:** For production applications, consider using a proper database solution like MongoDB, PostgreSQL, or MySQL.

## Frontend Integration

The frontend files are located in the `public` directory and are automatically served as static content by the Express server. The main entry point is `index.html` which can be accessed at `http://localhost:3000/` when the server is running.

## Security Considerations

⚠️ **Important Security Notes:**
- Passwords are stored in plain text (not recommended for production)
- No authentication middleware implemented
- Admin endpoint has no access control
- Consider implementing proper password hashing and authentication for production use

## Development

The application uses mock data for flight search results. To integrate with real flight APIs, modify the `/api/search` endpoint in `server.js`.

## Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

ISC License
