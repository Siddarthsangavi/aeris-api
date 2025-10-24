# Aeris API Installation Guide

Follow these steps to set up and run the **Aeris API** locally or in production.

## Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org) (version 16 or higher)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account for database hosting

## Installation Steps

1. **Clone the Repository**
   ```
   git clone https://github.com/<your-username>/aeris-api.git
   cd aeris-api
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Create Environment Variables**
   In the project root directory, create a `.env` file and add the following:
   ```
   MONGO_URI=<your MongoDB Atlas connection string>
   PORT=3000
   ```
   *Note:* The `PORT` variable is optional and defaults to **3000**.

4. **Run in Development Mode**
   ```
   npm run start:dev
   ```
   The API will be accessible at [http://localhost:3000](http://localhost:3000).

5. **Build for Production**
   ```
   npm run build
   ```

6. **Run the Production Server**
   ```
   npm run start
   ```
```
