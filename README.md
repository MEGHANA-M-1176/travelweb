# Backend Setup Instructions

## Files Created:
1. **package.json** - Dependencies and project configuration
2. **server.js** - Main server file with all API endpoints
3. **users.json** - User data storage (with sample users)
4. **.env** - Environment variables configuration

## Installation Steps:

### 1. Install Dependencies
Run this command to install all packages and generate package-lock.json:
```bash
npm install
```

This will automatically create:
- **package-lock.json** - Exact dependency versions
- **node_modules/** - All installed packages

### 2. Additional Files to Create

Create these additional JSON files in your root directory:

**bookings.json** (create empty file):
```json
[]
```

**flights.json** (will be auto-created with sample data when server starts)

### 3. Create Public Directory
```bash
mkdir public
```
Then move your HTML frontend file to `public/index.html`

### 4. Project Structure
```
your-travel-project/
├── node_modules/          (auto-generated)
├── public/
│   └── index.html        (your frontend)
├── .env
├── package.json
├── package-lock.json     (auto-generated)
├── server.js
├── users.json
├── bookings.json
└── flights.json          (auto-generated)
```

## Running the Application:

### Development Mode:
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

## API Endpoints Available:

### Authentication:
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login  
- GET `/api/auth/profile` - Get user profile (requires auth)

### Flights:
- POST `/api/flights/search` - Search flights
- GET `/api/destinations/popular` - Get popular destinations

### Bookings:
- POST `/api/bookings/flight` - Book a flight (requires auth)
- GET `/api/bookings` - Get user bookings (requires auth)

### Utility:
- GET `/api/health` - Health check
- GET `/` - Serve frontend

## Sample Users (for testing):
- **Email:** john.doe@example.com, **Password:** password123
- **Email:** jane.smith@example.com, **Password:** password123  
- **Email:** admin@wanderlust.com, **Password:** admin123

## Features Included:
- ✅ User authentication with JWT
- ✅ Password hashing with bcrypt
- ✅ Rate limiting
- ✅ CORS configuration
- ✅ Input validation with Joi
- ✅ Flight search functionality
- ✅ Booking system
- ✅ Error handling
- ✅ Security headers with Helmet
- ✅ Request logging with Morgan
- ✅ Environment configuration

## Next Steps:
1. Run `npm install` to generate package-lock.json and node_modules
2. Update the .env file with your actual configuration
3. Create the public directory and move your frontend files
4. Test the API endpoints with Postman or similar tool
5. Connect your frontend to use these API endpoints
