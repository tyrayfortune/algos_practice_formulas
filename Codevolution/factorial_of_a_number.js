//problem - given an integer "n", find the facotiral of that integer
//in mathmatics, factorial of a non-negative integers is the product of all
//positive intergers less then or equal to "n"
//if 'n' is 0, the factorial is 1

let factorial = function(n){
    let result =1
    for (let i = 2; i <= n; i++) {
        result *= i
        // console.log(`this is i: ${i} and this is the result: ${result}`)
    }
    return result
}
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(5))
