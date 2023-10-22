function solve(priceRatings, entryPoint, itemType) {
    const calculateLeftDamage = (rating, entry, type) => {
        let damage = 0;
        for (let i = entry - 1; i >= 0; i--) {
            if (
                (type === "cheap" && rating[i] < rating[entry]) ||
                (type === "expensive" && rating[i] >= rating[entryPoint])
            ) {
                damage += rating[i];
            } else {
                break;
            }
        }
        return damage;
    };

    const calculateRightDamage = (rating, entry, type) => {
        let damage = 0;
        for (let i = entry + 1; i < rating.length; i++) {
            if (
                (type === "cheap" && rating[i] < rating[entry]) ||
                (type === "expensive" && rating[i] >= rating[entry])
            ) {
                damage += rating[i];
            } else {
                break;
            }
        }
        return damage;
    };

    const leftDamage = calculateLeftDamage(priceRatings, entryPoint, itemType);
    const rightDamage = calculateRightDamage(
        priceRatings,
        entryPoint,
        itemType
    );

    if (leftDamage >= rightDamage) {
        console.log(`Left - ${leftDamage}`);
    } else {
        console.log(`Right - ${rightDamage}`);
    }
}

solve([1, 5, 1], 1, "cheap");
solve([5, 10, 12, 5, 4, 20], 3, "cheap");
solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
