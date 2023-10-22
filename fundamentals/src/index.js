/**
 *
 * @param {any[]} a
 */
function solve(a) {
    a.splice(0, 1);
    let cityNum = 0;
    let totalProfit = 0;
    let cities = [];
    while (a != 0) {
        cityNum++;
        cities.push({
            name: a[0],
            profit: Number(a[1]),
            expenses: Number(a[2]),
            city: cityNum,
        });
        a.splice(0, 3);
    }
    cities.forEach((city) => {
        if (city.city % 3 == 0) city.expenses = city.expenses * 1.5;
        if (city.city % 5 == 0) city.profit = city.profit * 0.9;
        console.log(
            `In ${city.name} Burger Bus earned ${(
                city.profit - city.expenses
            ).toFixed(2)} leva.`
        );
        totalProfit += city.profit - city.expenses;
    });
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

solve([
    "3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00",
]);
