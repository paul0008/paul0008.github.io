/*
P.Davies
Coffee Blueprint (Class)

1 - Think ot the Blueprint name - Coffee
2 - Think ot the variables
3 - Of those which ones are default and which ones are custom
4 - Decide the methods that are needed
*/

function Coffee(name, price, amountOfMilk, amountOfCoffee){
    this.name = name;
    this.price = price;
    this.amountOfMilk = amountOfMilk;
    this.amountOfCoffee = amountOfCoffee;
    //Default
    this.size = "Med";
    //Methods
    this.changeSize = function(size){this.size = size}
    this.addCoffee = function(amountToAdd){this.amountOfCoffee += amountToAdd}
}

let latte = new Coffee("Latte", 1.50, 60, 40); //Creates an INSTANCE of my blueprint
let mocha = new Coffee("Mocha", 2,50, 50);
console.log(latte.size)
latte.changeSize("Large")
console.log(latte.size)
console.log(latte.amountOfCoffee)
latte.addCoffee(10)
console.log(latte.amountOfCoffee)



