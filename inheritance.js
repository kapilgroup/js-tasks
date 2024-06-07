

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`${this.name}: ₹${this.price}`);
    }
}


class Electronic extends Product {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty; 
    }

    display() {
        super.display();
        console.log(`Warranty: ${this.warranty} years`);
    }
}



let computer = new Electronic('computer', 35000, 6);
let tab = new Electronic('tab', 15000, 1);


computer.display();
tab.display();