//Task 1 - Create a Customer Class
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
        console.log(`New customer created: ${this.name} (${this.email})`);
    }
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
        console.log(`${this.name} purchased for $${amount}`);
    }

    getTotalSpent() {
        const total = this.purchaseHistory.reduce((sum, value) => sum + value, 0);
        return total;
    }
}
const customer1 = new Customer("John Johnson", "john@example.com");
customer1.addPurchase(600);
customer1.addPurchase(700);
console.log(`Total Spent By ${customer1.name}: $${customer1.getTotalSpent()}`);

