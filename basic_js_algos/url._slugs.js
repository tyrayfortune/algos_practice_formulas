// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. 
// You can use any of the methods covered in this section, and don't use replace. Here are the requirements:
// The input is a string with spaces and title-cased words
// The output is a string with the spaces between words replaced by a hyphen (-)
// The output should be all lower-cased letters
// The output should not have any spaces

// example
// // Only change code below this line
// function urlSlug(title) {

// }
// // Only change code above this line
// urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");


// function urlSlug(title) {
//     const output = title.reduce((c,p,a,i) => {
//         const nameSplit = c.name.split(" ")
//         console.log(c)
//     }, "")
//     return null
// }


function urlSlug(title) {

return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .split(" ")
    .join("-")
}

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))
console.log(urlSlug(" Winter Is  Coming"))