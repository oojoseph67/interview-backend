# REST API

## Description

A REST API built with [Nest](https://github.com/nestjs/nest) for managing AI-powered surveys and responses. This API provides endpoints for generating AI-powered survey questions, collecting responses, and managing user authentication through Google OAuth.

## Features

- AI-Powered Survey Generation
  - Generate survey questions based on titles
  - Get AI-suggested survey titles
  - Collect and manage survey responses
- Authentication
  - Google OAuth integration
  - JWT-based authentication
  - Protected routes
- Data Management
  - MongoDB integration
  - Mongoose schemas
  - Data validation
- API Documentation
  - Swagger UI integration
  - Detailed endpoint documentation
  - Request/response examples
  - Interactive testing interface

## Documentation

### API Documentation (Swagger)
- Local URL: `http://localhost:8888/api`
- Production URL: `https://cytric-backend-ocff.onrender.com/api`
- Interactive API documentation with request/response examples
- Test endpoints directly from the browser
- Authentication flow documentation
- Schema definitions and examples

### Technical Documentation (Compodoc)
- URL: `http://localhost:8889`
- Detailed technical documentation of the codebase
- Class and component relationships
- Project architecture overview
- Dependency injection patterns
- Service implementations

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Generate Documentation

```bash
# Generate Compodoc documentation
$ pnpm run compodoc

# Serve Compodoc documentation
$ pnpm run compodoc:serve
```

## API Endpoints

### Authentication
- `POST /google-authentication` - Authenticate with Google OAuth

### AI Survey Management
- `POST /ai/generate-questions` - Generate AI-powered survey questions
- `POST /ai/respond-to-question` - Submit responses to survey questions
- `GET /ai/suggest-titles` - Get AI-suggested survey titles

## Stay in touch

- Author - Joseph
- Website - https://github.com/oojoseph67

## License

This project is [MIT licensed](LICENSE).
