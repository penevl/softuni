/**
 *
 * @param {String[]} b
 * @param {String[]} a
 */
function solve(a, b) {
    let newArr = [];
    let output = "";
    a.forEach((element, index) => {
        if (index % 2 == 0) {
            newArr.push(Number(element) + Number(b[index]));
        } else {
            newArr.push(element + b[index]);
        }
    });
    newArr.forEach((element) => {
        output += element + " - ";
    });
    console.log(output.substring(0, output.length - 3));
}

solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
solve(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
