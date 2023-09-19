function solve(n) {
    var count = 0;
    var counter = 0;
    var shouldRun = true;
    var sum = 0;
    while (shouldRun) {
        counter++;
        // console.log(count, counter, sum)
        if (!(counter % 2 == 0)) {
            count++;
            console.log(counter);
            sum += counter;
        }
        if (count == n) {
            shouldRun = false;
        }
    }
    console.log(`Sum: ${sum}`);
}
