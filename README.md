
# Docease: A Backend Application for Healthcare Management

**Docease** is a backend application designed to enhance healthcare management services by providing efficient access and management of patient data. Utilizing Firebase for its database, Docease aims to streamline various healthcare processes, ensuring that medical records are accurately and reliably accessible.

## Features

- **Efficient Management of Patient Records**: Facilitates easy handling of patient information.
- **Firebase Database Integration**: Ensures robust data storage and retrieval.
- **Scalable and Robust Backend Architecture**: Built to support growing healthcare needs.
- **Easy-to-Use Setup and Deployment Process**: Simplifies the installation and configuration for users.

## Tech Stack

- **Node.js**: JavaScript runtime for building the backend.
- **Firebase**: Real-time database for storing data.
- **Sequelize**: ORM for managing database interactions.
- **pnpm**: Fast package manager for dependency management.

## Setup

### Prerequisites

Ensure the following are installed:

- Node.js (v14 or later)
- Firebase CLI (install globally using `npm install -g firebase-tools`)
- pnpm (install globally using `npm install -g pnpm`)

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/docease.git
   cd docease
   ```

2. **Install Dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```bash
     FIREBASE_API_KEY=your_firebase_api_key
     FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
     FIREBASE_DATABASE_URL=https://your_project_id.firebaseio.com
     FIREBASE_PROJECT_ID=your_project_id
     FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
     FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     FIREBASE_APP_ID=your_app_id
     ```

4. **Set Up Firebase Database**:
   - Log into your Firebase console and create a new project.
   - Set up the database according to your requirements.

5. **Run Database Migrations (if any)**:
   ```bash
   pnpm run migrate
   ```

6. **Start the Application**:
   ```bash
   pnpm start
   ```
   The application should now be running at `http://localhost:3000`.

## Running Tests

To ensure the application's functionality, run:
```bash
pnpm test
```

## API Documentation

The API provides various endpoints to manage patients and healthcare records:

### Patient Endpoints

- `GET /patients`: Retrieve a list of all patients.
- `POST /patients`: Add a new patient.
- `GET /patients/{id}`: Retrieve a specific patient by ID.
- `PUT /patients/{id}`: Update patient details by ID.
- `DELETE /patients/{id}`: Delete a patient by ID.

### Medical Record Endpoints

- `GET /records`: Retrieve all medical records.
- `POST /records`: Add a new medical record.
- `GET /records/{id}`: Retrieve a medical record by ID.
- `PUT /records/{id}`: Update a medical record by ID.
- `DELETE /records/{id}`: Delete a medical record by ID.

## Contributing

To contribute to Docease:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make changes and commit them:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, reach out at your-email@example.com.

