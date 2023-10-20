function solve(a) {
    let correct = true;
    if (a.length < 6 || a.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        correct = false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(a)) {
        console.log("Password must consist only of letters and digits");
        correct = false;
    }

    const digitCount = a.split("").filter((char) => /\d/.test(char)).length;
    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
        correct = false;
    }

    if (!correct) return;

    console.log("Password is valid");
}
