let int;
checkPrime();

function checkPrime() {
    int = (prompt("Enter a positive integer"));
    while (int < 0 || (isNaN(int))) {
        int = prompt("Enter a positive integer");
    }
    showPrimes(int);
}

function showPrimes(n) {
    let prime = [];
    if (n == 0 || n == 1) {
        alert("For n = "+ n +" is not prime number");
    }
    else {
    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) {
            continue;
        }
        prime.push(i);
    }
    alert("For n = "+ n +" prime number are "+ prime.join(","));
    } 
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}