function solve(a, b) {
    const factorial = (num) => {
        if (num === 0) {
            return 1;
        }
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    };

    const result1 = factorial(a);
    const result2 = factorial(b);
    const divisionResult = (result1 / result2).toFixed(2);
    console.log(divisionResult);
}
