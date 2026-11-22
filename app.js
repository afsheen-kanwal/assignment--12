// ---------- Task 1: E-Commerce Product Details ----------
console.log("===== Array Destructuring - Task 1: Product Details =====");

const product = ["Nike Shoes", 4500, "Black", "Available"];

const [productName, productPrice, productColor, productAvailability] = product;

console.log("Product Name :", productName);
console.log("Price        : Rs.", productPrice);
console.log("Color        :", productColor);
console.log("Availability :", productAvailability);


// ---------- Task 2: Restaurant Order Management ----------
console.log("\n===== Array Destructuring - Task 2: Restaurant Order =====");

const order = ["Ali", "Pizza", 2, 1500, "Cash"];

// First two values + rest operator for remaining info
const [customerName, foodItem, ...remainingOrderInfo] = order;

const [quantity, price, paymentMethod] = remainingOrderInfo;

console.log("Customer Name  :", customerName);
console.log("Food Item      :", foodItem);
console.log("Remaining Info :", remainingOrderInfo);
console.log("--- Order Summary ---");
console.log(`Customer: ${customerName}`);
console.log(`Item: ${foodItem}`);
console.log(`Quantity: ${quantity}`);
console.log(`Price: Rs. ${price}`);
console.log(`Payment Method: ${paymentMethod}`);


// ---------- Task 3: Weather Application ----------
console.log("\n===== Array Destructuring - Task 3: Weather App =====");

const weather = ["Karachi", 32, "Sunny", 65];

let [city, temperature, condition, humidity] = weather;

console.log("Before swap:");
console.log(`City: ${city}, Temperature: ${temperature}, Condition: ${condition}, Humidity: ${humidity}`);

[temperature, humidity] = [humidity, temperature];

console.log("After swap:");
console.log(`Temperature: ${temperature}, Humidity: ${humidity}`);

const cityOnly = ["Lahore"];
const [cityName, defaultTemperature = 25] = cityOnly;

console.log("City with default temperature:");
console.log(`City: ${cityName}, Temperature: ${defaultTemperature}`);



// ---------- Task 1: User Profile Page ----------
console.log("\n===== Object Destructuring - Task 1: User Profile =====");

const user = {
    name: "Ayesha",
    email: "ayesha@example.com",
    age: 24,
    city: "Karachi",
    profession: "Frontend Developer"
};

const { name, email, profession: jobTitle } = user;

console.log("--- User Profile ---");
console.log("Name      :", name);
console.log("Email     :", email);
console.log("Job Title :", jobTitle);


// ---------- Task 2: Online Shopping Checkout ----------
console.log("\n===== Object Destructuring - Task 2: Checkout =====");

const customer = {
    name: "Ahmed",
    address: {
        city: "Karachi",
        area: "Gulshan",
        postalCode: 75300
    },
    payment: {
        method: "Cash on Delivery",
        status: "Pending"
    }
};

// Nested destructuring (renamed to avoid clash with earlier variables)
const {
    name: customerFullName,
    address: { city: deliveryCity, area: deliveryArea },
    payment: { method: payMethod, status: payStatus }
} = customer;

console.log("--- Checkout Summary ---");
console.log("Customer       :", customerFullName);
console.log("City           :", deliveryCity);
console.log("Area           :", deliveryArea);
console.log("Payment Method :", payMethod);
console.log("Payment Status :", payStatus);


// ---------- Task 3: Employee Dashboard ----------
console.log("\n===== Object Destructuring - Task 3: Employee Dashboard =====");

const employee = {
    employeeName: "Sara",
    designation: "UI Designer",
    salary: 80000
};

const {
    employeeName: empName,
    designation: empJobTitle,
    salary,
    department = "Not Assigned"   // default value
} = employee;

console.log("--- Employee Profile ---");
console.log("Name       :", empName);
console.log("Job Title  :", empJobTitle);
console.log("Salary     : Rs.", salary);
console.log("Department :", department);



// ---------- Task 1: Food Delivery Application ----------
console.log("\n===== Callbacks - Task 1: Food Delivery =====");

function placeOrder(foodName, callback) {
    console.log(`Placing order for ${foodName}...`);
    callback(foodName);
}

function orderPlacedMessage(foodName) {
    console.log(`Your ${foodName} order has been placed successfully!`);
}

placeOrder("Pizza", orderPlacedMessage);
placeOrder("Burger", orderPlacedMessage);


// ---------- Task 2: Payment Processing System ----------
console.log("\n===== Callbacks - Task 2: Payment Processing =====");

function processPayment(amount, callback) {
    if (amount > 0) {
        callback(`Payment of Rs. ${amount} was successful!`);
    } else {
        callback("Payment failed! Invalid amount.");
    }
}

function showPaymentResult(message) {
    console.log(message);
}

processPayment(2500, showPaymentResult);
processPayment(0, showPaymentResult);
processPayment(-100, showPaymentResult);


// ---------- Task 3: Student Result Management System ----------
console.log("\n===== Callbacks - Task 3: Student Result =====");

function calculateResult(studentName, marks, callback) {
    const result = marks >= 50 ? "Passed" : "Failed";
    callback(studentName, marks, result);
}

function displayResult(studentName, marks, result) {
    console.log(`Student: ${studentName} | Marks: ${marks} | Result: ${result}`);
    if (result === "Passed") {
        console.log(`Congratulations ${studentName}! You have passed the exam.`);
    } else {
        console.log(`Sorry ${studentName}, you have failed. Better luck next time.`);
    }
}

calculateResult("Ali", 75, displayResult);
calculateResult("Sara", 40, displayResult);
calculateResult("Zara", 50, displayResult);



// ---------- Task 1: E-Commerce Discount System ----------
console.log("\n===== Higher-Order - Task 1: Discount System =====");

const prices = [1000, 2500, 4000, 5000, 8000];

const discountedPrices = prices.map((originalPrice) => originalPrice - originalPrice * 0.1);

console.log("Original Prices  :", prices);
console.log("Discounted Prices:", discountedPrices);

prices.forEach((originalPrice, index) => {
    console.log(`Rs. ${originalPrice} -> Rs. ${discountedPrices[index]}`);
});


// ---------- Task 2: Job Portal - Filter Eligible Candidates ----------
console.log("\n===== Higher-Order - Task 2: Job Portal =====");

const candidates = [
    { name: "Ali", experience: 1 },
    { name: "Sara", experience: 3 },
    { name: "Ahmed", experience: 5 },
    { name: "Zara", experience: 2 },
    { name: "Usman", experience: 4 }
];

const shortlistedCandidates = candidates.filter((candidate) => candidate.experience >= 3);

console.log("Shortlisted Candidates:");
shortlistedCandidates.forEach((candidate) => {
    console.log(`${candidate.name} - ${candidate.experience} years`);
});
console.log("Total Shortlisted:", shortlistedCandidates.length);


// ---------- Task 3: Shopping Cart Total Calculator ----------
console.log("\n===== Higher-Order - Task 3: Shopping Cart =====");

const cart = [
    { product: "Shoes", price: 3000, quantity: 2 },
    { product: "Shirt", price: 1500, quantity: 3 },
    { product: "Watch", price: 5000, quantity: 1 }
];

const cartWithSubtotals = cart.map((item) => ({
    product: item.product,
    subtotal: item.price * item.quantity
}));

const finalBill = cartWithSubtotals.reduce((total, item) => total + item.subtotal, 0);

cartWithSubtotals.forEach((item) => {
    console.log(`${item.product} Subtotal: Rs. ${item.subtotal}`);
});
console.log("Final Bill: Rs.", finalBill);