# Layoutin API Backend

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Set up database:

- Create a MySQL database
- Update `.env` file with your database URL:

```
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DB_NAME?schema=layoutin"
```

3. Run database migrations:

```bash
npm run prisma:migrate
```

4. Seed initial data:

```bash
npm run prisma:seed
```

## Running the Server

Development (with hot reload):

```bash
npm run dev
```

Production:

```bash
npm start
```

## API Endpoints

### Printing Jobs

- `POST /api/jobs` - Create new printing job
- `GET /api/jobs` - List all jobs
- `GET /api/jobs/:id` - Get specific job
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job

### PDF Generation

- `POST /api/generate-pdf` - Generate PDF (placeholder)

### Documentation

- `GET /api-docs` - View API documentation

## Environment Variables

- `PORT` - Server port (default: 3000)
- `DATABASE_URL` - MySQL connection string

## Frontend Integration

Replace localStorage calls with API requests:

```javascript
// Example: Saving a printing job
async function savePrintingJob(jobData) {
  const response = await fetch("http://localhost:3000/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
  });
  return await response.json();
}
```

## Deployment

1. Set up production database
2. Configure environment variables
3. Install production dependencies:

```bash
npm install --production
```

4. Start server:

```bash
npm start
```
