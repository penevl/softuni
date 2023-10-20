function solve(a) {
    if (a == 100) {
        console.log("100% Complete!");
        return;
    }

    let b = "";
    let c = "";

    for (let i = 0; i < a / 10; i++) {
        b += "%";
    }

    for (let i = 0; i < 10 - a / 10; i++) {
        c += ".";
    }

    console.log(`
${a}% [${b}${c}]\nStill loading...
    `);
}
