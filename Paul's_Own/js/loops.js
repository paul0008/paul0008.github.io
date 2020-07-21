let foods = [
    "burgers",
    "chips",
    "salad"
];

/*
//For Loop
//Initialize - sets up local loop variables
//question/condition - asked every loop (true - do loop code)
//action - done every loop (at the end of the loop)

for(let i = 0; i < 10; i++){
    console.log(i);
}

//traditional for loop array
for(let i = 0; i < foods.length; i++){
    console.log(foods[i])
}

//modern way for looping an array
for(let food of foods){
    console.log(food)
}

//Map Method
foods.map(food => console.log(food))
*/

//while loop
//question if question is true then do loop Code
//if question is false then stop

//simulate how many times we roll a dice before we get 6
let dice = 0;
let counter = 0;

while(dice != 6){
    console.log("not a six");
    counter++ //add one to the counter
    dice = Math.floor(Math.random() * 6) + 1;
}

console.log(`It took $(counter) rolls to get a six`)
console.log("It took " + counter + " rolls to get a six!");




