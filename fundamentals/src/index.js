function solve(num) {
    if (num % 10 == 0) {
        console.log("The number is divisible by 10");
        return;
    }
    if (num % 7 == 0) {
        console.log("The number is divisible by 7");
        return;
    }
    if (num % 6 == 0) {
        console.log("The number is divisible by 6");
        return;
    }
    if (num % 3 == 0) {
        console.log("The number is divisible by 3");
        return;
    }
    if (num % 2 == 0) {
        console.log("The number is divisible by 2");
        return;
    }
    console.log("Not divisible");
}

const test = [30, 15, 12, 1643];
test.forEach((x) => {
    solve(x);
});
