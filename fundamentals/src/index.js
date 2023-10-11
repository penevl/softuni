/**
 *
 * @param {Number[]} arr
 */
function solve(arr) {
    let longestSequence = [];
    let currentSequence = [];
    let currentElement = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === currentElement) {
            currentSequence.push(arr[i]);
        } else {
            if (currentSequence.length > longestSequence.length) {
                longestSequence = currentSequence;
            }
            currentSequence = [arr[i]];
            currentElement = arr[i];
        }
    }

    if (currentSequence.length > longestSequence.length) {
        longestSequence = currentSequence;
    }

    let output = "";
    longestSequence.forEach((element) => {
        output += element += " ";
    });
    console.log(output);
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
