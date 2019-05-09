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
    //     .then(function (res) {

    //         var purchasedItem;
    //         // head: ["id", "product_name", "department_name", "price", "stock_quantity"]
    //         for (var i = 0; i < res.length; i++) {
    //             if (res[i].product_name) {
    //                 purchasedItem = res[i];

    //             }


    //         }
    //     });
    // console.log(purchasedItem.toString());
    // //    this was showing an error // function (err) {
    // //     if (err) throw err;
    // console.log("Your Purchase is being finalized ")
    // buyProduct();

};

















// if (err) throw err;
//     console.log(result);
//     // ProductID();






//           .then(function (answer) {
//     connection.query(
//         "INSERT INTO purchase SET ?",
//         {
//             name: answer.id,
//             quanity: answer.quanity

//         },
//         function (err) {
//             if (err) throw err;


//         });

// });
















// function bidAuction() {
//     // query the database for all items being auctioned
//     connection.query("SELECT * FROM auctions", function (err, result) {
//         if (err) throw err;
//         // once you have the items, prompt the user for which they'd like to bid on
//         inquirer
//             .prompt([
//                 {
//                     name: "productID",
//                     type: "rawlist",
//                     choices: function () {
//                         var chosenItemID = [];
//                         for (var i = 0; i < result.length; i++) {
//                             chosenItemID.push(result[i].item_ID);
//                         }
//                         return chosenItemID;
//                     },
//                     message: "Thanks for submitting your order.  Please confirm the quanity you would like"
//                 },
//                 {
//                     name: "bid",
//                     type: "input",
//                     message: "How much would you like to bid?"
//                 }
//             ])



//     })

// };
