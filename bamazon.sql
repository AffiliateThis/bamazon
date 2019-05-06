DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;



USE bamazonDB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Earwax Collection Tray", "Heath and Beauty", 2.50, 100), ("Navel Lint Measuring Tape", "Home Improvement", 3.10, 120), ("Blanton's Single Barrel Bourgon","Grocery", 60.25, 75), 
("Mail Order Beef Brisket in a Box", "Grocery", 90, 92), ("Team America Easy Button", "Electronics", 19.95, 57 ), ("Charlston Chew ", "Grocery", 2.56, 1000), 
("Earth Worm Juice Concentrate", "Grocery", 4.95, 345), ("Imaginary Widget Organizer", "Home Improvement", 24.95, 89 ), ("Chuck Norris Certification", "Education", 29.95, 102), 
("Roadkill Jerky Teriyaki BBQ flavor", "Grocery", 8.95, 1200 );