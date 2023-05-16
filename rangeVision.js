function range_vision(number) {
    const numberString = number.toString();
    const length = numberString.length;

    for (let i = 0; i < length; i++) {
        const digito = parseInt(numberString[i]);
        const visionRange = digito;

        let visionSuma = 0;

        for(let j = i + 1; j <= i + visionRange && j < length ; j++) {
         visionSuma += parseInt(numberString[j]);
        }
        if (digito === 1 && visionSuma === 0) {
            return true;
        }
    }

    return false;
}

console.log(range_vision(34315));
console.log(range_vision(123456789));


