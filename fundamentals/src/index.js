function solve(a, b) {
    if (a.length >= b.length) {
        a.forEach((element) => {
            if (b.includes(element)) console.log(element);
        });
    } else {
        b.forEach((element) => {
            if (a.includes(element)) console.log(element);
        });
    }
    
}

solve(
    ["Hey", "hello", 2, 4, "Peter", "e"],
    ["Petar", 10, "hey", 4, "hello", "2"]
);
solve(["S", "o", "f", "t", "U", "n", "i", " "], ["s", "o", "c", "i", "a", "l"]);
