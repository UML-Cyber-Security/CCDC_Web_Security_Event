const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.API_PORT || 3001;

// Use environment variables to specify the configuration for the Postgres database
const pool = new Pool({
 user: process.env.PGUSER || 'admin',
 host: process.env.PGHOST || 'database',
 database: process.env.PGDATABASE || 'vulnerableDatabase',
 password: process.env.PGPASSWORD || 'securePassword',
 port: process.env.PGPORT || 5432,
});

app.use(express.json());

app.use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 next();
});

app.post('/login', async (req, res) => {
 const { username, password } = req.body;
 try {
 const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
 if (result.rows.length > 0) {
 res.json({ success: true });
 } else {
 res.json({ success: false });
 }
 } catch (err) {
 console.error(err);
 res.status(500).json({ error: 'An error occurred while connecting to the database' });
 }
});

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
});