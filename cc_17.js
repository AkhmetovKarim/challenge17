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


//Task 2 - Create a SalesRep Class
class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
        console.log(`SalesRep created: ${this.name}`);
    }
    addClient(customer) {
        if (customer instanceof Customer) {
            this.clients.push(customer);
            console.log(`${customer.name} been added to ${this.name}`);
        } else {
            console.error("customer instance can be added");
        }
    }

    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        if (client) {
            const total = client.getTotalSpent();
            console.log(`${client.name} has spent $${total}`);
            return total;
        } else {
            console.log(`Client ${name} not found`);
            return 0;
        }
    }
}

const rep1 = new SalesRep("Johnny Cash");
rep1.addClient(customer1);
rep1.getClientTotal("John Johnson");