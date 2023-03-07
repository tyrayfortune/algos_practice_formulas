//problem - given a natural number 'n', determine if the number is prime or not
// a prime number is a natural number greater than 1 that is not a product of two smaller natural numbers
// 5= true (1*5 or 5*1), 4 = false (1*4, 4*1, 2*2)

function isPrime(n){

    if (n< 2) {
        return false
    }
    // iterate thru each number starting at 2 and seeing if it has a remainder
    for (let i = 2; i < n; i++) {
        //if it doesnt have a remainder it means it is divisible by something, and therefore not a prime
        if (n%i==0) {
            return false
        }
    }
    return true
}

console.log(isPrime(10))
console.log(isPrime(100))
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(5))
console.log(isPrime(21059))
