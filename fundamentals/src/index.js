function solve(a) {
    let sumEven = 0;
    let sumOdd = 0;

    const numStr = a.toString();

    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);

        if (digit % 2 === 0) {
            sumEven += digit;
        } else {
            sumOdd += digit;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
