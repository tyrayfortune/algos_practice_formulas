// Both push() and unshift() have corresponding methods that are nearly functional opposites: pop() and shift(). 
// instead of adding, pop() removes an element from the end of an array, while shift() removes an element from the beginning. 
// The key difference between pop() and shift() and their cousins push() and unshift(), is that neither method takes parameters, and
//  each only allows an array to be modified by a single element at a time.

// Let's take a look:

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// greetings would have the value ['whats up?', 'hello'].

greetings.shift();
// greetings would have the value ['hello'].

// We can also return the value of the removed element with either method like this:

let popped = greetings.pop();
// greetings would have the value [], and popped would have the value hello.