function printOddNumberPattern(n) {
    if (n < 0) {
    console.log("Please provide a non-negative number.");
    return;
    }
    
    for (let i = 0; i <= n;i++ ) {
    if (i % 2 !== 0) {
    console.log(i);
    }
    }
    }
    printOddNumberPattern(20);
    