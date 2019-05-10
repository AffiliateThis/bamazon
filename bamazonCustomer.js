var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Steak12",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllProducts();

});


function queryAllProducts() {
    connection.query("SELECT id, product_name, department_name, price, stock_quantity FROM products", function (err, res, fields) {
        var productTable = new Table({
            head: ["id", "product_name", "department_name", "price", "stock_quantity"]

        });
        for (var i = 0; i < res.length; i++) {
            productTable.push([
                res[i].id,
                res[i].product_name,
                res[i].department_name,
                res[i].price,
                res[i].stock_quantity
            ])
        }
        console.log(productTable.toString());
        // for ( )
        inquirer
            .prompt({
                name: "welcome",
                type: "list",
                message: "Welcome to Chris' Bamazon Deals and more Deals on the most excellent random products.  Please confirm if you would like to continue and [BUY] or [EXIT].  I don't know why you would want to exit as these are some seriously random high quality products.",
                choices: ["BUY", "EXIT"]


            })
            .then(function (answer) {
                if (answer.welcome === "BUY") {
                    buyProduct();
                } else {
                    connection.end();


                }



            });


    })
}

function buyProduct() {
    inquirer
        .prompt([
            {
                name: "productID",
                type: "input",
                message: "Welcome to Chris' Bamazon Deals and more Deals on the most excellent random products.  Please provide Product ID of the item you would like to purchase?"
            },

            {
                name: "quantity",
                type: "input",
                message: "How much would you like to order?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (data) {

            var productID = (data.productID);
            var prodQuantity = parseInt(data.quantity);

            connection.query(`SELECT stock_quantity, price FROM products WHERE id = ${productID}`, function (err, res, fields) {
                console.log(res[0].stock_quantity);
                console.log(res[0].price);


                var remainingInventory = res[0].stock_quantity - prodQuantity;
                console.log(remainingInventory);

                if (res[0].stock_quantity < prodQuantity) {
                    console.log("We're sorry. We do not have enough of this product inventory...");
                } else {
                    console.log("Your order total is {$" + (res[0].price * prodQuantity) + "}");
                    console.log("Placing Order...  Thank you for your business!");

                }

                var query = connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: remainingInventory
                        },
                        {
                            id: productID
                        }
                    ],
                    function (err, res) {
                        console.log(res.affectedRows + " products updated!\n");
                        // Call deleteProduct AFTER the UPDATE completes

                        then(function (data) {
                            var itemID = (data.itemID);
                            var quantityInput = parseInt(data.quantity);

                            var quantityUpdate = (res[0].stock_quantity - data.quantity)




                        });

                    });
            }


            )



        });
}










