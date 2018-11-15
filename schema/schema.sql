CREATE DATABASE art_hub;

USE art_hub;

CREATE TABLE authors 
	(
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        nick_name VARCHAR(255),
        email VARCHAR(255),
        pass VARCHAR(255),
        acitve VARCHAR(255),
        paypall_id VARCHAR(255),
		created_at TIMESTAMP DEFAULT NOW() NOT NULL
    );
    
    CREATE TABLE users 
	(
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        nick_name VARCHAR(255),
        email VARCHAR(255),
        pass VARCHAR(255),
        acitve VARCHAR(255),
		created_at TIMESTAMP DEFAULT NOW()
    );

CREATE TABLE products
	(
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL DEFAULT 'product name',
        price DECIMAL(8, 2) NOT NULL DEFAULT 0.00,
        category VARCHAR(255) NOT NULL DEFAULT 'category',
        product_desc TEXT NOT NULL,
        img VARCHAR(255) NOT NULL,
		created_at TIMESTAMP DEFAULT NOW() NOT NULL,
        author_id INT,
        FOREIGN KEY(author_id) REFERENCES authors(id) ON DELETE CASCADE
    );


INSERT INTO authors (first_name, last_name)
VALUES ('Alex', 'Bolshunov');

INSERT INTO products (title, price, img, product_desc, author_id)
VALUES 
	('Super product',10.99, 'http://www.helkonorthamerica.com/uploads/5/5/2/8/55283177/s636580399330128839_c2_i6_w640.jpeg', 'description', 1),
	('Even better product', 25.01, 'http://www.helkonorthamerica.com/uploads/5/5/2/8/55283177/s636580399330128839_c2_i6_w640.jpeg', 'description', 1),
    ('Book', 56.99, 'http://www.helkonorthamerica.com/uploads/5/5/2/8/55283177/s636580399330128839_c2_i6_w640.jpeg', 'description', 1),
    ('Screen', 250.12, 'http://www.helkonorthamerica.com/uploads/5/5/2/8/55283177/s636580399330128839_c2_i6_w640.jpeg', 'description', 1),
    ('Phone', 12.12, 'http://www.helkonorthamerica.com/uploads/5/5/2/8/55283177/s636580399330128839_c2_i6_w640.jpeg', 'description', 1),
    ('Lamp', 24.01, 'http://www.helkonorthamerica.com/uploads/5/5/2/8/55283177/s636580399330128839_c2_i6_w640.jpeg', 'description', 1),
    ('Cup', 5.99, 'http://www.helkonorthamerica.com/uploads/5/5/2/8/55283177/s636580399330128839_c2_i6_w640.jpeg', 'description', 1),
    ('Paper box', 2.75, 'http://www.helkonorthamerica.com/uploads/5/5/2/8/55283177/s636580399330128839_c2_i6_w640.jpeg', 'description', 1),
    ('Car', 35045.75, 'http://www.helkonorthamerica.com/uploads/5/5/2/8/55283177/s636580399330128839_c2_i6_w640.jpeg', 'description', 1),
    ('Mirror', 34, 'http://www.helkonorthamerica.com/uploads/5/5/2/8/55283177/s636580399330128839_c2_i6_w640.jpeg', 'description', 1);
    
    
    

SELECT * FROM products;
