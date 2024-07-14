# Basic CRUD with book

This is a basic CRUD project

## Getting Started

Instructions on how to set up and use the project.

### Prerequisites

I will assume that you have installed mysql, node and typescript

### Installation

#### 1. Install require packages

Install necessary Node.js packages using npm:

```bash
npm install nodemon express cors mysql2 sequelize ts-node
npm install --save-dev @types/node @types/express sequelize-cli typescript
```

#### 2. Configure MySQL Connection

Ensure MySQL Workbench or another MySQL client is installed. Modify the configuration in src/db/config/config.json with the appropriate database connection details (name, host, password).


#### 3. Create Database

Using MySQL Workbench or another MySQL client:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);
```

#### 4. Run the migration

To run the migration file, you must to navigate to src/db folder, by enter following command:
```bash
cd src/db
npx sequelize-cli db:migrate
```

The above command will create tables with columns in the database.

#### 5. Start the project

Return to the root folder and run the project

```bash
cd ../..
npm start
```


### Usage

Test API

#### 1. Create a book

- **Endpoint**: [text](http://localhost:4000/api/v1/books)
- **Method**: POST
- **Body**:
    ```json
    {
        "name": "",
        "author": "",
        "category": "",
        "content": "",
    }
    ```

#### 2. Get book list with basicfilter

- **Endpoint**: [text](http://localhost:4000/api/v1/books?category=author=)
- **Method**: GET

#### 3. Get book detail

- **Endpoint**: [text](http://localhost:4000/api/v1/books/:id)
- **Method**: GET

#### 4. Update book detail

- **Endpoint**: [text](http://localhost:4000/api/v1/books/:id)
- **Method**: PUT
- **Body**:
    ```json
    {
        "name": ""
    }
    ```
#### 5. Delete a book

- **Endpoint**: [text](http://localhost:4000/api/v1/books/:id)
- **Method**: DELETE