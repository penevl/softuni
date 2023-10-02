function solve(arr) {
    const oldArr = Array.from(arr);
    const newArr = arr;
    let sumOld = 0;
    let sumNew = 0;
    newArr.forEach((num, i) => {
        if (newArr[i] % 2 == 0) {
            newArr[i] += i;
        } else {
            newArr[i] -= i;
        }
    });
    oldArr.forEach((num) => {
        sumOld += num;
    });
    newArr.forEach((num) => {
        sumNew += num;
    });
    console.log(arr);
    console.log(sumOld);
    console.log(sumNew);
}
