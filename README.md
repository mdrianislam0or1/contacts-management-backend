# Contacts Management Application - Backend

This is the backend code for a contacts management application, built using Node.js, Express.js, and MongoDB. It provides RESTful API endpoints for managing contact details, including adding, viewing, updating, and deleting contacts.
![ss1](https://github.com/mdrianislam0or1/contacts-management-backend/assets/67714964/61dc80f6-120e-49a1-bac8-2b93082b98e3)

## Project Structure

The backend codebase is organized into several directories:

- **src/controllers**: Contains controller functions responsible for handling HTTP requests and responses.
- **src/models**: Contains Mongoose models for defining database schemas and interacting with MongoDB.
- **src/routes**: Contains route definitions for mapping HTTP methods to controller functions.
- **src/services**: Contains service functions for performing business logic and interacting with the database.
- **src/utils**: Contains utility functions used across the application.

## Setup

To set up and run the backend code:

1. Clone the repository to your local machine.
2. Navigate to the `backend` directory.

```PORT=5000
   DATABASE_URL=mongodb+srv://**********:**********@cluster0.vnnz93j.mongodb.net/**********?retryWrites=true&w=majority&appName=Cluster0
   NODE_ENV=development
   SUPPER_ADMIN_PASSWORD=**********
```

3. Run `npm install` to install dependencies.
4. Set up a MongoDB database and update the connection string in the `.env` file.
5. Run `npm start` to start the Node.js server.
6. The backend API will be accessible at `http://localhost:5000`.

## Dependencies

The backend code utilizes the following dependencies:

- **Express.js**: Web application framework for building RESTful APIs.
- **Mongoose**: MongoDB object modeling tool for Node.js, used for defining schemas and interacting with MongoDB.
- **dotenv**: Library for loading environment variables from a `.env` file.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- **http-status**: Library for standard HTTP status codes.
- **express-validator**: Middleware for validating and sanitizing incoming request data.

## Development Environment

The backend code is developed using:

- **Visual Studio Code**: Code editor for writing and debugging code.
- **ESLint**: JavaScript linting tool for maintaining code quality and consistency.
- **Prettier**: Code formatter for ensuring consistent code style.
- **Postman**: API development tool for testing and debugging HTTP APIs.

## Contributors

- [Rian Islam](https://github.com/mdrianislam0or1)

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code according to your needs.
