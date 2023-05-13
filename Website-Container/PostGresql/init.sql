-- Create the users table
CREATE TABLE users (
 username TEXT,
 password TEXT
);

-- Insert some users
INSERT INTO users (username, password)
VALUES ('admin', 'password'),
       ('give chris', 'his phd');