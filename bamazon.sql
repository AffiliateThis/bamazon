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
VALUES ("Earwax Collection Tray", 2.50, 100), ("Navel Lint Measuring Tape", 3.10, 120), ("Blanton's Single Barrel Bourgon", 60.25, 75), 
("Mail Order Brisket in a Box", 90, 92), ()