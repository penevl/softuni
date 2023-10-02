/**
 *
 * @param {Number[]} b
 * @param {Number} a
 */
function solve(a, b) {
    let out = "";
    if (a.length >= b) {
        for (let i = b; i < a.length; i++) {
            out += a[i] + " ";
        }
        if (b > 0) {
            for (let i = 0; i < b; i++) {
                out += a[i] + " ";
            }
        }
    } else {
        let diff = b - a.length;
        for (let i = diff; i < a.length; i++) {
            out += a[i] + " ";
        }
        for (let i = 0; i < diff; i++) {
            out += a[i] + " ";
        }
    }
    console.log(out);
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 10);
