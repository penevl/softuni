function solve(a, b) {
    let start = a.charCodeAt(0);
    let end = b.charCodeAt(0);
    let final = "";

    if (start > end) {
        var temp = start;
        start = end;
        end = temp;
    }

    for (var i = start + 1; i < end; i++) {
        var character = String.fromCharCode(i);
        final += character + " ";
    }
    console.log(final);
}
