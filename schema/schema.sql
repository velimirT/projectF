 -- authors
 
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `nick_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `acitve` varchar(255) DEFAULT NULL,
  `paypall_id` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Alex','Bolshunov',NULL,NULL,NULL,NULL,NULL,'2018-11-16 17:41:28');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;


-- orders

 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `payment_status` varchar(255) DEFAULT NULL,
  `address` text,
  `product_id` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `author_id_fk` (`author_id`),
  KEY `product_id_fk` (`product_id`),
  CONSTRAINT `author_id_fk` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`),
  CONSTRAINT `product_id_fk` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);


-- users

 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` text,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- products


DROP TABLE IF EXISTS `products`;
SET character_set_client = utf8mb4 ;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT 'product name',
  `price` decimal(8,2) NOT NULL DEFAULT '0.00',
  `category` varchar(255) NOT NULL DEFAULT 'category',
  `img` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `author_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`) ON DELETE CASCADE
);

INSERT INTO products (title, price, img, category, author_id)
VALUES 
('Winged Stags', 45.00,'https://www.heirloomtapestries.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/h/w/hw43_les_cerfs_ailes_the_winged_stags__8.jpg', 'tapestry', 1),
('Tuqoise Tapestry', 60.00,  'http://www.lusinia.com/image/cache/Product/Sheetsets/Tara%20Tapestry%20Turqoise%20Blue-800x800.jpeg', 'tapestry', 1),
('Picnic in the Garden', 78.50, 'https://www.gobelen-kartina.ru/_mod_files/ce_images/eshop/generated/galantnaya_scena_01_931x700.jpg', 'tapestry', 1),
('Crest Tapestry', 150.00, 'https://s.yimg.com/aah/simplytapestries/crest-on-black-ii-tapestry-24.gif', 'tapestry', 1),
('Branches and shadows', 200.00, 'https://s.yimg.com/aah/simplytapestries/birch-shadows-tapestry-3.gif', 'tapestry', 1),
 ( 'Pineapple', 25.00, 'https://i.etsystatic.com/8155830/r/il/0006c2/1445332810/il_fullxfull.1445332810_lipg.jpg', 'drawings', 1),
    ('Pensive Dog', 50.00, 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAMfuQF5Gn698c3nbsUCxqEs86IRyMr2gJKwWauG3V9TbG2pB1QhZ8MOz8t-y8xL38PN4WVrB5pPuOL4MZmpKu2CUB0jPp2AdhMAG6pPVL-GPIj1PfveBL&amp;usqp=CAE', 'drawings',1),
    ('Little Duck', 30.00, 'https://i.etsystatic.com/13623703/r/il/0cdc86/1363300618/il_570xN.1363300618_qaqr.jpg', 'drawings', 1),
    ('John Lennon', 25.00, 'https://i.etsystatic.com/16600797/r/il/070ada/1429629797/il_570xN.1429629797_t5m6.jpg', 'drawings',1),
    ('Geometric Drawing', 80, 'https://i.etsystatic.com/7598186/r/il/646f92/1148943706/il_fullxfull.1148943706_c2be.jpg', 'drawings',1);
    
CREATE TABLE tapestry 
	(
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL DEFAULT 'product name',
        price DECIMAL(8, 2) NOT NULL DEFAULT 0.00,
		    product_desc TEXT NOT NULL,
        product_type VARCHAR(255) NOT NULL DEFAULT 'type', 
        product_materials VARCHAR (255) NOT NULL DEFAULT 'materials',
        width INT,
        height  INT,
        category VARCHAR(255) NOT NULL DEFAULT 'category',
        qty INT NOT NULL DEFAULT 1,
        colors VARCHAR(255) NOT NULL DEFAULT 'colors',
        img VARCHAR(255) NOT NULL,
		    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
        author_id INT,
        product_id INT,
        FOREIGN KEY(author_id) REFERENCES authors(id) ON DELETE CASCADE,
        FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE
    );

INSERT INTO tapestry (title, price, product_desc, product_type, product_materials, width, height, qty,  colors, img, category, author_id, product_id)
VALUES 
('Winged Stags', 45.00, 'Beautiful Handwoven Tapestry of Stags', 'wall tapestry', 'woven', 1000, 800, 12, 'brown, green and red',  'https://www.heirloomtapestries.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/h/w/hw43_les_cerfs_ailes_the_winged_stags__8.jpg', 'tapestry', 1, 1),
('Tuqoise Tapestry', 60.00, 'Tara Hippy Tapestry in Floral Blue', 'table tapestry', 'cotton', 300, 500, 20, 'blue', 'http://www.lusinia.com/image/cache/Product/Sheetsets/Tara%20Tapestry%20Turqoise%20Blue-800x800.jpeg', 'tapestry', 1, 2),
('Picnic in the Garden', 78.50, 'This tapestry is called Gallant Scene II. Medieval couples in the garden in the mille fleur style', 'wall decor', 'woven', 70, 90, 25, 'floral', 'https://www.gobelen-kartina.ru/_mod_files/ce_images/eshop/generated/galantnaya_scena_01_931x700.jpg', 'tapestry', 1, 3),
('Crest Tapestry', 150.00, 'Pair of crests in black, golds and reds','wall tapestry', 'woven', 53, 41, 20, ' black, red, and gold', 'https://s.yimg.com/aah/simplytapestries/crest-on-black-ii-tapestry-24.gif', 'tapestry', 1, 4),
('Branches and shadows', 200.00, 'Birch Shadows Tapestry Large','decor', 'yarn', 60, 60, 52, 'gray and blue', 'https://s.yimg.com/aah/simplytapestries/birch-shadows-tapestry-3.gif', 'tapestry', 1, 5);

CREATE TABLE drawings
	(
		    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL DEFAULT 'product name',
        price DECIMAL(8, 2) NOT NULL DEFAULT 0.00,
		    product_desc TEXT NOT NULL,
        drawing_type VARCHAR(255) NOT NULL DEFAULT 'drawing_type',  
		    materials VARCHAR(255) NOT NULL DEFAULT 'materials', #graphite, charcoal, pastels, conte, silverpoint, market, pen, ink
		    techniques VARCHAR(255) NOT NULL DEFAULT 'techniques', #hatching, sppling 
        qty INT NOT NULL DEFAULT 1,
        img VARCHAR(255) NOT NULL,
		created_at TIMESTAMP DEFAULT NOW() NOT NULL,
        author_id INT,
        product_id INT,
        FOREIGN KEY(author_id) REFERENCES authors(id) ON DELETE CASCADE,
        FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE
    );

   INSERT INTO drawings (title, price, product_desc, drawing_type, materials, techniques, qty, img, author_id, product_id)
    VALUES
    ( 'Pineapple', 25.00, 'Pineapple Art Drawing, Black and White', 'rough sketch', 'ink', 'hatching', 50,'https://i.etsystatic.com/8155830/r/il/0006c2/1445332810/il_fullxfull.1445332810_lipg.jpg', 1, 6),
    ('Pensive Dog', 50.00, 'Dog Art Drawing, Black and White', 'realism', 'charcoal', 'sketch', 100, 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAMfuQF5Gn698c3nbsUCxqEs86IRyMr2gJKwWauG3V9TbG2pB1QhZ8MOz8t-y8xL38PN4WVrB5pPuOL4MZmpKu2CUB0jPp2AdhMAG6pPVL-GPIj1PfveBL&amp;usqp=CAE',1, 7),
    ('Little Duck', 30.00, 'Little Duck – Original Conte Crayon Drawing, Duck Drinking from a pool of water, Unframed', 'realism', 'conte', 'sketch', 1, 'https://i.etsystatic.com/13623703/r/il/0cdc86/1363300618/il_570xN.1363300618_qaqr.jpg', 1, 8),
    ('John Lennon', 25.00, 'Stippling John Lennon Portrait', 'portrait', 'Ink and Watercolor Paper', 'Stippling', 40, 'https://i.etsystatic.com/16600797/r/il/070ada/1429629797/il_570xN.1429629797_t5m6.jpg', 1, 9),
    ('Geometric Drawing', 80,'Blue Abstract art. Geometric Drawing. Energy', 'Abstract', 'Pigment ink and Color Paper', 'Geometric', 2, 'https://i.etsystatic.com/7598186/r/il/646f92/1148943706/il_fullxfull.1148943706_c2be.jpg', 1, 10);
    