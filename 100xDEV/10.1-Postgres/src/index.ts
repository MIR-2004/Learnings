import { Client } from "pg";

const client = new Client({
    connectionString:"postgresql://neondb_owner:npg_CxX7dR8PAjSV@ep-white-boat-a1nv4h48-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
})

    

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL, 
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(100) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `)
}


createUsersTable()