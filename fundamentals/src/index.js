function solve(a) {
    a.forEach((number) => {
        const numberStr = number.toString();
        const reversedNumberStr = numberStr.split("").reverse().join("");
        console.log(numberStr === reversedNumberStr);
    });
}
