/**
 *
 * @param {Number[]} arr
 */
function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sumRight = 0;
        let sumLeft = 0;
        for (let x = 0; x < i; x++) {
            sumLeft += arr[x];
        }
        for (let x = i + 1; x < arr.length; x++) {
            sumRight += arr[x];
        }
        if (sumLeft == 0 && sumRight == 0) {
            console.log(i);
            break;
        }
        if (sumLeft == sumRight) {
            console.log(i);
            break;
        }
        if (i == arr.length - 1) {
            console.log("no");
        }
    }
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
