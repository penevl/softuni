function solve(count, type, day) {
    switch (type) {
        case "Students":
            switch (day) {
                case "Friday":
                    var sum = 8.45 * count;
                    if (count >= 30) sum = sum * 0.85;

                    console.log(`Total price: ${sum.toFixed(2)}`);
                    break;
                case "Saturday":
                    var sum = 9.8 * count;
                    if (count >= 30) sum = sum * 0.85;

                    console.log(`Total price: ${sum.toFixed(2)}`);
                    break;
                case "Sunday":
                    var sum = 10.46 * count;
                    if (count >= 30) sum = sum * 0.85;

                    console.log(`Total price: ${sum.toFixed(2)}`);
                    break;
                default:
                    break;
            }
            break;
        case "Business":
            switch (day) {
                case "Friday":
                    if (count >= 100) count = count - 10;
                    var sum = 10.9 * count;
                    console.log(`Total price: ${sum.toFixed(2)}`);
                    break;
                case "Saturday":
                    if (count >= 100) count = count - 10;
                    var sum = 15.6 * count;
                    console.log(`Total price: ${sum.toFixed(2)}`);
                    break;
                case "Sunday":
                    if (count >= 100) count = count - 10;
                    var sum = 16 * count;
                    console.log(`Total price: ${sum.toFixed(2)}`);
                    break;
                default:
                    break;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    var sum = 15 * count;
                    if (count >= 10 && count <= 20) sum = sum * 0.95;
                    console.log(`Total price: ${sum.toFixed(2)}`);
                    break;
                case "Saturday":
                    var sum = 20 * count;
                    if (count >= 10 && count <= 20) sum = sum * 0.95;
                    console.log(`Total price: ${sum.toFixed(2)}`);
                    break;
                case "Sunday":
                    var sum = 22.5 * count;
                    if (count >= 10 && count <= 20) sum = sum * 0.95;
                    console.log(`Total price: ${sum.toFixed(2)}`);
                    break;
                default:
                    break;
            }
            break;

        default:
            break;
    }
}
