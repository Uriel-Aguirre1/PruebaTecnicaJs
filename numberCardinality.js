function number_cardinality(number) {
    if (number % 10 === 0) {
        console.log("zero");
    } else if (number % 10 ===5 ){
        console.log("five");
    } else if (number % 2 === 0){
        console.log("even");
    } else {
        console.log("odd");
    }
    
}

console.log(number_cardinality(100));
console.log(number_cardinality(88));
console.log(number_cardinality(155));
console.log(number_cardinality(99));