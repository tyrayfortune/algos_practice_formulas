//problem - given a number 'n' find the nth element of the fibonacci sequence
//in math, the fibonacci sequence is a sequence in which each number is the sum of the two preceding numbers
//the first two numbers in the sequence are 0 and 1 (0,1,1,2,3,5,8)

//expected resukts
//recursiveFibonacci(0) = 0
//recursiveFibonacci(1) = 1
//recursiveFibonacci(6) = 8, as we start on index 0, so 0,1,1,2,3,5,8 is six indexes over

function recursiveFibonacci(n){
    if (n <2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
