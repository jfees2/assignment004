/*eslint-env browser*/

function display_menu() {
    "use strict";
    window.console.log("Product Inventory Mangement System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all products");
    window.console.log("update - update stock info");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

//VIEW PRODUCTS IN INVENTORY 
function display(inventory) {
    "use strict";
    var i;
    var sorted_skus = inventory[0][0];
    sorted_skus.sort();
    
    //get index of sorted skus
    for (i = 0; i < inventory[0][0].length; i ++) {
        var sorted_sku_index = inventory[0][0].indexOf(parseInt(sorted_skus[i]));
    
    //put new sorted index in array    
        window.console.log(inventory[0][0][sorted_sku_index] + " " + inventory[0][1][sorted_sku_index] + " (" + inventory[0][2][sorted_sku_index] + ") $" + inventory[0][3][sorted_sku_index]);
    }
    window.console.log(" ");
}

//UPDATE INVENTORY
function update(inventory) {
    "use strict";
    var updated_sku = window.prompt("Enter sku number you would like to update: ");
    var sku_index = inventory[0][0].indexOf(parseInt(updated_sku));
    if (sku_index >= 0) {
        var updated_quantity = window.prompt("Enter updated quantity: ");
        inventory[0][2][sku_index] = parseInt(updated_quantity);
    }
    else {
        window.alert("That sku does not exist. Please input a different sku.");
    }
}


function main() {
    "use strict";
    var i, inventory, command, products, product, sku, quantity, price;
    
    display_menu();
    
    //INVENTORY AND PRODUCT ARRAY VALUES
    inventory = [
        products = [
                    sku = [1003, 1001, 1004, 1005, 1002], 
                    product = ["Charles Shaw", "Chesse Crunches", "Jackfruit Curry", "Super Salad", "Honeycrips"],  
                    quantity = [12, 16, 20, 1, 80],
                    price = [2.99, 1.99, 2.69, 3.99, 1.29]
        ]
    ];
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();  
