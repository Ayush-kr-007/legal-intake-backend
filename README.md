# AdalatIQ Legal Intake Backend

Backend service for the AdalatIQ Internship Screening Assignment.

## Features

* REST API using Express.js
* MongoDB database integration
* Stores legal submissions
* Retrieves all stored submissions
* AI-assisted legal query categorization
* AI-generated priority detection
* Error handling and validation
* Deployed on Render

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Groq API
* dotenv
* CORS

## API Endpoints

### Create Submission

POST `/api/submissions`

Request Body:

```json
{
  "name": "Ayush",
  "contact": "ayush@gmail.com",
  "legalQuery": "My landlord refuses to return deposit"
}
```

### Get All Submissions

GET `/api/submissions`

Returns:

* Name
* Contact
* Legal Query
* Category
* Priority
* Timestamp

## AI Feature

Integrated Groq LLM API for:

* Legal category classification
* Priority estimation

Possible Categories:

* Criminal Law
* Employment Law
* Family Law
* Property Law
* Tenant Law
* Consumer Law
* Other

Possible Priorities:

* Low
* Medium
* High

## Deployment

Backend deployed on Render.

Live URL:
https://legal-intake-backend.onrender.com

## Setup Instructions

```bash
npm install
npm run dev
```

## Environment Variables

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
GROQ_API_KEY=your_groq_api_key
```
