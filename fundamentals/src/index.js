function solve(country) {
    const englishSpoken = ["England", "USA"];
    const spanishSpoken = ["Spain", "Argentina", "Mexico"];
    if (englishSpoken.includes(country)) {
        console.log("English");
    } else if (spanishSpoken.includes(country)) {
        console.log("Spanish");
    } else {
        console.log("unknown");
    }
}