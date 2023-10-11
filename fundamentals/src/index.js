/**
 *
 * @param {Number[]} a
 */
function solve(a) {
    const largestIndex = (arr) => {
        let i;
        let max = arr[0];
        let maxIndex = 0;
        for (i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
                maxIndex = i;
            }
        }

        return maxIndex;
    };
    a.splice(0, largestIndex(a));
    const filteredArray = [...new Set(a)];
    let out = "";
    filteredArray.sort((a, b) => {
        return a - b;
    });
    filteredArray.reverse();
    for (let i = 0; i < 3; i++) {
        if (filteredArray[i]) out += filteredArray[i] + " ";
    }
    console.log(out);
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);
