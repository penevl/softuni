function solve(a) {
    if (a <= 1) {
        return false;
    }

    let divisorSum = 1;
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            divisorSum += i;
            if (i !== a / i) {
                divisorSum += a / i;
            }
        }
    }

    if (divisorSum === a) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
