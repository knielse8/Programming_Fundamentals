function KaylaCakesOrderSystem() {
//define possible options
var cakeSize = ["1/8 sheet", "1/4 sheet", "1/2 sheet", "Full sheet"];
var frostingType = ["Buttercream","Whipped"];
var cakePrice = [19.99, 24.99, 39.99, 69.99];

var cakeOrders = []; //array to store multiple orders
var grandTotal = 0; //initialize total

function takeOrder() {
    var anotherOrder = true;

    while (anotherOrder) {
        var order = {};

        // Validate cake size
        do {
            order.cakeSize = prompt("Choose a cake size: " + cakeSize.join(", "));
            if (!cakeSize.includes(order.cakeSize)) {
                alert("Invalid cake size! Please choose from the given options.");
            }
        } while (!cakeSize.includes(order.cakeSize));

        // Validate frosting type
        do {
            order.frostingType = prompt("Choose a frosting type: " + frostingType.join(", "));
            if (!frostingType.includes(order.frostingType)) {
                alert("Invalid frosting type! Please choose from the given options.");
            }
        } while (!frostingType.includes(order.frostingType));

        // Validate due date format
        do {
            order.dueDate = prompt("Enter a due date (MM/DD/YYYY): ");
            if (!/^\d{2}\/\d{2}\/\d{4}$/.test(order.dueDate)) {
                alert("Invalid date format! Please enter in MM/DD/YYYY format.");
            }
        } while (!/^\d{2}\/\d{2}\/\d{4}$/.test(order.dueDate));

        // Validate pickup time format
        do {
            order.pickupTime = prompt("Enter pickup time (HH:MM AM/PM): ");
            if (!/^\d{2}:\d{2} (AM|PM)$/.test(order.pickupTime)) {
                alert("Invalid time format! Please enter in HH:MM AM/PM format.");
            }
        } while (!/^\d{2}:\d{2} (AM|PM)$/.test(order.pickupTime));

        // Get design details
        order.designDetails = prompt("Enter design details: ");

        // Assign price based on cake size
        var sizeIndex = cakeSize.indexOf(order.cakeSize);
        order.totalCost = cakePrice[sizeIndex];
        
        // Add order cost to grandTotal
        grandTotal += order.totalCost;

        // Add order to cakeOrders array
        cakeOrders.push(order);

        // Ask customer if they want to place another order
        anotherOrder = confirm("Would you like to place another order?\nClick OK to add another order or Cancel to complete the order.");
  }
}

//start order process
takeOrder();

// Display all orders
document.write("<h2>Cake Order Summary:</h2>");
cakeOrders.forEach((order, index) => {
    document.write("<p><strong>Order " + (index + 1) + ":</strong></p>");
    document.write("<p>Cake Size: " + order.cakeSize + "</p>");
    document.write("<p>Frosting Type: " + order.frostingType + "</p>");
    document.write("<p>Due Date: " + order.dueDate + "</p>");
    document.write("<p>Pickup Time: " + order.pickupTime + "</p>");
    document.write("<p>Design Details: " + order.designDetails + "</p>");
    document.write("<p>Cost: $" + order.totalCost.toFixed(2) + "</p>");
    document.write("<hr>");
});

// Display grand total
document.write("<h2>Total Cost for All Orders: $" + grandTotal.toFixed(2) + "</h2>");
document.write("<p>Thank you for your order!</p>");
}

KaylaCakesOrderSystem();
