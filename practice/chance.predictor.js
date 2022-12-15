//GOAL: create a mimic to see the odds of a number being adjeccent the previous number generated. based off desire
//too see if spotify liked songs would ever go down in order on shuffle

//THOUGHT PROCCESS:
//create an empty arr to store variable
//create var set to 0 to track number of iterations it takes in for loop
//math.random()
//for loop set to desired number of iterations
//push original number into array
// add 1 to the var set to 0 
//set if statement for if number is in ascending/descending order else continue
// setif statement that if number is NOT adjecent to previous number, pop previous number from array, push new number in
// return var that was set at 0 with iteration type, plus array to see what number it wass



// function chance(num){
//     let arr =[]
//     let iterations = 0

// return num
// }

// console.log(chance(14))



function countdown (number){
    if (number >=0) {
        console.log("first step into recursion")
        return
    }
    countdown(number -1)
}
    console.log(countdown(5))
    