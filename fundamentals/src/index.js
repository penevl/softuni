function solve(m, n) {
    var result = "";
    var sum = 0;
    for (let index = m; index <= n; index++) {
        result = result + index + " ";
        sum += index;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
