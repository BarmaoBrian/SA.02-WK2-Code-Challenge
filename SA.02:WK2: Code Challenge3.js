//getting prime numbers in a given list (array).

3.


function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function filterPrimes(arr) {
    return arr.filter(num => isPrime(num));
}

const inputArray = [3,23,45,12,67,32,56,77,42,311,113];
const primeNumbers = filterPrimes(inputArray);

console.log(primeNumbers); // Output: [2, 23, 67 ,311 ,113 ]
