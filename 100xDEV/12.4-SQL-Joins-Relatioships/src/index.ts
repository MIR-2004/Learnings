import { Client } from "pg";
import dotenv from 'dotenv';

dotenv.config();
const client = new Client({
  connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
});

async function createUsersTable() {
  try {
    await client.connect();
    console.log("✅ Connected to PostgreSQL");

    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Users table created");
  } catch (err) {
    console.error("❌ Error creating table:", err);
  } finally {
    await client.end().catch(err => console.error("❌ Error closing client:", err));
  }
}

createUsersTable();
