/*
let age = 17;
let country = "UK"
if(age == 17 && country == "UK"){
    console.log("We can serve you");
}else{
    console.log("We can't serve you")
}

You have been asked by dodgy Dave to display the price of entry for different people at his Night Club. 
You should have two variables age and gender. 
For simplicity's sake age is between 1 and 99 and gender is male or female. 
The following rules apply:

Male Under 18 No entry
Male 18 - 25 - £55
Male 55 - 60 - £150
Male > 60 No Entry
Female Under 18 No Entry
Female 18 - 20 = FREE
Female 20 - 30 = £5
Female 30-45 = £10
Female > 45 = £15
*/

let age = 30
//let gender = "Male"
let gender = "Female"

if(age < 18){console.log("No Entry")};

if(gender == "Male"){
    if(age >= 18 && age <= 55){console.log("Entry £55")};
    if(age > 55 && age <= 60){console.log("Entry £150")};
    if(age > 60 ){console.log("No Entry")};
}

if(gender == "Female"){
    if(age >= 18 && age <= 20){console.log("Entry is Free")};
    if(age > 20 && age <= 30){console.log("Entry £5")};
    if(age > 30 && age <= 45){console.log("Entry £10")};
    if(age > 45 ){console.log("Entry £15")};
}

