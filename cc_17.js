//Task 1 - Create a Customer Class
class Customer { //create a class
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
        console.log(`New customer created: ${this.name} (${this.email})`);
    }
    addPurchase(amount) { //method to add a purchase to history
        this.purchaseHistory.push(amount);
        console.log(`${this.name} purchased for $${amount}`);
    }

    getTotalSpent() { //method to calcula amount spent by customer
        const total = this.purchaseHistory.reduce((sum, value) => sum + value, 0);
        return total;
    }
}
const customerA = new Customer("John Johnson", "john@example.com"); //create instance
customerA.addPurchase(600);
customerA.addPurchase(700);
console.log(`Total Spent By ${customerA.name}: $${customerA.getTotalSpent()}`);


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

    getClientTotal(name) { //method to add customer to salesrep
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
rep1.addClient(customerA);
rep1.getClientTotal("John Johnson");

//Task 3  - Create a VIPCustomer class 
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
        console.log(`VIP Customer created: ${this.name} (${this.vipLevel})`);
    }
    getTotalSpent() { //override method to add 10% bonus
        const baseTotal = super.getTotalSpent();
        const bonus = baseTotal * 0.10;
        const totalWBonus = baseTotal + bonus;
        return totalWBonus.toFixed(2);
    }
}
//create vip customer 
const vip1 = new VIPCustomer("Kurt Cobain", "KCobain@example.com", "Gold");
vip1.addPurchase(4000);
vip1.addPurchase(3600);
vip1.addPurchase(1700);
console.log(`Total Spent by VIP ${vip1.name} (with bonus): $${vip1.getTotalSpent()}`);


//Task 4 - Build a Client Report System
const customer1 = new Customer("Rupert", "rupert@example.com");
customer1.addPurchase(250);
customer1.addPurchase(450);

const customer2 = new VIPCustomer("Robert", "robert@example.com", "Gold");
customer2.addPurchase(760);
customer2.addPurchase(980);

const customer3 = new Customer("Javier", "javier@example.com")
customer3.addPurchase(210);

const customer4 = new VIPCustomer("Antonio", "antonio@example.com", "Platinum");
customer4.addPurchase(1300);

const allCustomers = [customer1, customer2, customer3, customer4];//combine all into one array

const totalRevenue = allCustomers.reduce((total, customer) => { //calculate total revenue fromm all
    return total + parseFloat(customer.getTotalSpent());
}, 0);
//filter customers who spent >500
const highSpendingCustomers = allCustomers.filter(customer => customer.getTotalSpent() > 500);

const customerSummaries = allCustomers.map(customer => ({
    name: customer.name,
    totalSpent: `$${parseFloat(customer.getTotalSpent()).toFixed(2)}`
}));

console.log("Total Revenue from all customers: $" + totalRevenue.toFixed(2));//logs
console.log("High-Spending Customers:", highSpendingCustomers.map(c => c.name));
console.log("Customer Summary:", customerSummaries);