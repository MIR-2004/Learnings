import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:mirsaifali@localhost:6543/postgres",
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
