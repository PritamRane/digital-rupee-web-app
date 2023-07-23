## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running (or you can use MongoDB Atlas for online database).

### Clone the Repository

1. Open your terminal or command prompt.
2. Clone the repository to your local machine and follow these steps:
   ```bash
   git clone https://github.com/your-username/digital-rupee-web-app.git
  
   cd digital-rupee-web-app
   
   npm install
   
3. Go to backend and create .env file, set:
    ```bash
    MONGODB_URI=your-mongodb-connection-uri


4. npm run start:dev

5. frontend will start running on  http://localhost:3000.

6. backend will start running on  http://localhost:5000.

7. Screenshots of Running Project

## How to Use

1. Access the application in your web browser by navigating to [http://localhost:3000](http://localhost:3000).

2. The main page will display a user registration form.

3. Fill in the required details in the form (name, email, password).

4. Click the "Register" button to submit the registration form.

5. If the registration is successful, you will see a success message.

6. If there is an error during registration, an error message will be displayed.

## User Registration

### Endpoint - POST /api/register


### Description

This endpoint allows users to register in the Digital Rupee system by providing their name, email, and password.

### Request Body

| Field     | Type   | Required | Description                 |
|-----------|--------|----------|-----------------------------|
| name      | String | Yes      | User's full name            |
| email     | String | Yes      | User's email address        |
| password  | String | Yes      | User's password (encrypted) |

### Response

- 200 OK: Registration successful.

- 400 Bad Request: Invalid or missing fields in the request body.

- 500 Internal Server Error: An error occurred on the server.

---
_**Note:** This documentation is subject to change as the project evolves. Please refer to the latest version for the most up-to-date information._



## Contributing

If you'd like to contribute to this project, please follow the standard GitHub flow:

1. Fork the repository.

2. Create a new branch for your feature/bugfix.

3. Make your changes and commit them with descriptive commit messages.

4. Push your changes to your forked repository.

5. Create a pull request to the original repository's `main` branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

    

