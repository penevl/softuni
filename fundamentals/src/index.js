function solve(n) {
    for (let index = 1; index <= n; index++) {
        var result = "";
        for (let x = 0; x < index; x++) {
            result = result + index + " ";
        }
        console.log(result);
    }
}

solve(6);
