CREATE DATABASE art_hub;

USE art_hub;

CREATE TABLE authors 
	(
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL
    );

CREATE TABLE products
	(
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL DEFAULT 'product name',
        price DECIMAL(8, 2) NOT NULL DEFAULT 0.00,
        product_desc VARCHAR(255) NOT NULL DEFAULT 'description',
		created_at TIMESTAMP DEFAULT NOW() NOT NULL,
        author_id INT,
        FOREIGN KEY(author_id) REFERENCES authors(id) ON DELETE CASCADE
    );


INSERT INTO authors (first_name, last_name)
VALUES ('Alex', 'Bolshunov');

INSERT INTO products (title, price, author_id)
VALUES 
	('Super product', 10.99, 1),
	('Even better product', 25.01, 1),
    ('Book', 56.99, 1),
    ('Screen', 250.12, 1),
    ('Phone', 12.12, 1),
    ('Lamp', 24.01, 1),
    ('Cup', 5.99, 1),
    ('Paper box', 2.75, 1),
    ('Car', 35045.75, 1),
    ('Mirror', 34, 1);
    
    

SELECT * FROM products;
