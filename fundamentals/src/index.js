function solve(n) {
    var tries = 0;
    const user = n[0];
    const passwd = user.split("").reverse().join("");
    n.splice(0, 1);
    n.forEach((x) => {
        tries++;
        if (tries >= 4) {
            console.log(`User ${user} blocked!`);
            return;
        }
        if (x == passwd) {
            console.log(`User ${user} logged in.`);
            return;
        } else {
            console.log("Incorrect password. Try again.");
        }
    });
}
