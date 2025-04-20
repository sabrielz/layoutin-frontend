# Layoutin API Backend

## Project Structure

```
api/
├── controllers/         # Route controllers
├── middlewares/         # Express middlewares
├── repositories/        # Database operations
├── routes/              # Route definitions
├── services/            # Business logic
├── utils/               # Shared utilities
├── index.js             # Main application entry
└── README.md
```

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Set up database:

- Create a MySQL database
- Update `.env` file:

```
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DB_NAME?schema=layoutin"
```

3. Run migrations:

```bash
npm run prisma:migrate
```

4. Seed data:

```bash
npm run prisma:seed
```

## Development

Start dev server:

```bash
npm run dev
```

## API Endpoints

### Printing Jobs (`/api/jobs`)

- `POST /` - Create job
- `GET /` - List all jobs
- `GET /:id` - Get job by ID
- `PUT /:id` - Update job
- `DELETE /:id` - Delete job
- `POST /generate-pdf` - Generate PDF

### Pricing (`/api/pricing`)

- `GET /` - Get all pricing data

### Materials (`/api/bahan`)

- `GET /` - List available materials

## Code Organization

- **Routes**: Define endpoints and middleware chains
- **Controllers**: Handle HTTP requests/responses
- **Services**: Contain business logic
- **Repositories**: Handle database operations
- **Middlewares**: Request validation and processing

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
