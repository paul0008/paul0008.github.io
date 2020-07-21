const addNum = (num1, num2) => {
    return num1 + num2
}

const tripleNumber = (num) => {
    return addNum(num,num) + num
}

let result = addNum(2,2);
console.log(result);

let r = tripleNumber(5);
console.log(r);
