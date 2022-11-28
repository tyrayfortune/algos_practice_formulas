// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example,
//  2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
//example
// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.

//given function
// function sumPrimes(num) {
//     return num;
//   }

function sumPrimes(num) {
    //var to push all prime numbers into
    let result = 0;

    //if its 1 or less its not a prime
    if (num <= 1) {
        return `${num} is not a prime`
    }
    // Helper function to check for primes
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0)
            return false;
        }
        return true;
        }
    
    // Check each number and add result if is prime
    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
            result += i;
        }
    return result;
    }
console.log(sumPrimes(10))

