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



