//problem - given an integer "n", find the facotiral of that integer
//in mathmatics, factorial of a non-negative integers is the product of all
//positive intergers less then or equal to "n"
//if 'n' is 0, the factorial is 1

let recursiveFactorial = function(n){
//  basecase as all recursiveFacotiral will eventually get to 0
    if (n ==0 ) {
        return 1
    }
    else{
        return n * recursiveFactorial(n-1)
    }
}
console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(4))
console.log(recursiveFactorial(5))
//essentialy as long as n >0, we start with the recursive return, which goes alll the way down from n till n=0,
//when n=0, the original if statement hits, as every line gets hit each recursive time as it checks the whole function,
//then n gets assigned to 1, and then we go alll the way back up the call stack, multiplying, 1*2*3*4*5, then returns 
//the total value of n as it gets multipled to each new recursive call
//WATCH THIS YOUTUBE VIDEO: https://www.youtube.com/watch?v=g8spKa-LA_I
