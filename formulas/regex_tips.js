//KEY TERMS
//FLAGS: used to search more specifilically. g = matches the pattern multiple times. i = makes regex case inses, ect.
// CHARACTER CLASSES:  [ ], enables youi to seach for multiple thjings 
// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.
// Here's an example:

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Here the first match would return ["Hello"] and the second would return ["expressions"].



let testStr = "Repeat, Repeat, Repeat";
let ourrRegex = /Repeat/;
testStr.match(ourrRegex);
// Here match would return ["Repeat"].
// To search or extract a pattern more than once, you can use the global search flag: g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// And here match returns the value ["Repeat", "Repeat", "Repeat"]


// The wildcard character "." will match any one character. The wildcard is also called dot and period. 
// You can use the wildcard character just like any other character in the regex. For example,
//  if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
// Both of these test calls would return true.
// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun.
//  Your regex should use the wildcard character.



// You can search for a literal pattern with some flexibility with character classes. Character classes allow
//  you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
// For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this.
//  The [aiu] is the character class that will only match the characters a, i, or u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

// In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.
//another example:
// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // g for global flag so keeps searching. i for insesitive flag so not case sensitive
let result = quoteSample.match(vowelRegex); // passing the vowelregex to be checking the quoteSample


// ALSO:
// you could also create a set of characters that you do not want to match. 
// These types of character sets are called negated character sets.
// To create a negated character set, you place a caret character (^) after the opening bracket
//  and before the characters you do not want to match.

// For example, /[^aeiou]/gi matches all characters that are not a vowel. 
// Note that characters like ., !, [, @, / and white space are matched - the negated vowel character 
// set only excludes the vowel characters.




// Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. 
// This means it occurs at least once, and may be repeated.
// You can use the "+" character to check if that is the case. Remember, the character or pattern has to be present 
// consecutively. That is, the character has to repeat one after the other.

// For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single 
// match in aabc and return ["aa"].
// If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a
//  characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.


// There's also an option that matches characters that occur zero or more times. this is useful if you dont know where there is the 
//letters/numbers/ect ur looking for contained in the search
// The character to do this is the asterisk or star: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
// In order, the three match calls would return the values ["goooooooo"], ["g"], and null.




// you used the caret character (^) inside a character set to create a negated character set in 
// the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search 
// for patterns at the beginning of strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// The first test call would return true, while the second would return false.



// You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// The first test call would return true, while the second would return false.



// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. 
// This character class matches upper and lowercase letters plus numbers. Note, this character class also includes 
// the underscore character (_).
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
// All four of these test calls would return true.
// These shortcut character classes are also known as shorthand character classes.



// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter.
//  This shortcut is the same as [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
// The first match call would return the value ["%"] and the second would return ["!"].