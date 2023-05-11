const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3001;

const pool = new Pool({
 user: 'admin',
 // However, since the PostgreSQL server is running inside a Docker container
 // you might need to use the IP address of the container instead of localhost
 host: '172.17.0.2',
 database: 'mydatabase',
 password: 'mypassword',
 port: 5432,
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