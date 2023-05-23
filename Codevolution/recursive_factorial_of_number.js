//problem - given an integer "n", find the facotiral of that integer
//in mathmatics, factorial of a non-negative integers is the product of all
//positive intergers less then or equal to "n"
//if 'n' is 0, the factorial is 1

let recursiveFactorial = function(n){
//  case case as all recursiveFacotiral will eventually get to 0
if (n ===0 ) {
    return 1
}
//5*4, 4*3, 3*2, 2*1, then if state hits when 1*0
    return n * recursiveFactorial(n-1)
}
console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(4))
console.log(recursiveFactorial(5))

//thoughts: identify base-case, and break problem into smaller problems