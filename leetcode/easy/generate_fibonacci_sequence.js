// Write a generator function that returns a generator object which yields the fibonacci sequence.
// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

// Example 1:
// Input: callCount = 5
// Output: [0,1,1,2,3]
// Explanation:
// const gen = fibGenerator();
// gen.next().value; // 0
// gen.next().value; // 1
// gen.next().value; // 1
// gen.next().value; // 2
// gen.next().value; // 3

// Example 2:
// Input: callCount = 0
// Output: []
// Explanation: gen.next() is never called so nothing is outputted

//genetor functions are functions that can be paused and resumed during execution, allowing you to generate
//a series of values overtime. they are idtentifed with the "*" next to the function, and 
var fibGenerator = function*() {
    //setting the vars to the first two nums of the fib seq
    let n1 = 0,  n2 = 1;
    while (true){
        //only using the next() gets the yield to run, since next is hit, everything up until yield is hit runs, then 
        // n1 is returned, so 0. then if next() is called again, the iteration is run once, updating n2 and n1 before
        //returning n1
        yield n1
        let temp = n2
        n2 = n1+ n2
        n1 = temp
    }
};

const gen = fibGenerator();
//next() is for generator functions
console.log(gen.next()) // 0
console.log(gen.next()) // 1
console.log(gen.next()) // 1
console.log(gen.next()) // 2
