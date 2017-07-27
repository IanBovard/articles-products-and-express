
DROP DATABASE IF EXISTS art_prod;
DROP USER IF EXISTS buy_write;

CREATE USER buy_write WITH LOGIN PASSWORD 'password';
CREATE DATABASE art_prod WITH OWNER buy_write;

\c art_prod;

CREATE TABLE products (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(90) UNIQUE NOT NULL,
price FLOAT NOT NULL,
inventory INT NOT NULL,
CHECK (name !== '' AND price !== '' AND inventory !== '')
);

ALTER TABLE products OWNER TO buy_write;