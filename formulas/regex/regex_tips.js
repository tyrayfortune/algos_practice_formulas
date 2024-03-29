//KEY TERMS
//FLAGS: used to search more specifilically. g = matches the pattern multiple times. i = makes regex case inses, ect.
// CHARACTER CLASSES:  [ ], enables youi to seach for multiple thjings 
// .match() = matches a phrase with regex guidelines
// .test() = true/false boolean of weather statement passes regex
// .replace() replaces parts of a var with what you want changed.


//SIGNS:
// ^ = matches a term to the start
// [^] = matches any characters but the ones in the brackets 
// $ = matches a term to the end
// . =  matches a single character to any character
// [ ] = matches any single charcter from the bracketed list, i.e  = b[aecro]d
//  ( )  = Parentheses, groups one or more regular expressions. i.e matches codexpedia\.(com|net|org)  codexpedia.com, codexpedia.net, and codexpedia.org.
//  {n} = with one number inside matches exactly n times
// {n,} =  represents min times to match
// {n,m} = with ttwo numbers inside matches a min-max
//  | = matches either the regex befo it or the regex exp after it (or statement)
// + = matches 1 or more characters in front of the plus
// * = matches 0 or more characters in front of the *
// ! = does not match the next char in regex.  i.e q(?![0-9])  if the charachter after q is not a digit, it will matches the q in those strings of abdqk, quit, qeig, but not q2kd, sdkq8d.
// ? = matches 1 or 0 charas in front. i.e apples? would match apples or apple, consider it an optional element
// ?=...  = called a lookahead, which wants to see if it is contained in the string but doesnt add it. weird, google it
// (|) cheks for mixed group of characters. I.E /P(engu|umpk)in/ would return true for penguin or pumpkin
// 
// BACKSLASHES \ = 
    //  \n = line break
    //  \t represents a tab
    //  \w = [a-z0-9_]
    // \W capital W matches everything BUT stuff under \w
    // \d = [0-9]
    // \D matches all nondighits
    // \s = matches whitespace, i.e space between letters
    //  \S capitol S matches everything EXCEPT whitespace

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));
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
console.log(result)

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
// FOR PATTERNS AT THE BEGGINGS OF STRINGS.

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
let shortsHand = /\w+/;
let numberss = "42";
let varNames = "important_var";
longHand.test(numberss);
shortsHand.test(numberss);
longHand.test(varNames);
shortsHand.test(varNames);
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



// The shortcut to look for digit characters is \d, with a lowercase d. 
// This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.



// The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9],
//  which looks for a single character that is not a number between zero and nine.

// You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, 
// but also carriage return, tab, form feed, and new line characters. You can think of it as
//  similar to the character class [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// This match call would return [" ", " "].

// Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. 
// This can be useful when you want to search for multiple patterns over the same string.
// There are two kinds of lookaheads: positive lookahead and negative lookahead.
// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it.
//  A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
// On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there.
//  A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest 
//  of the pattern is returned if the negative lookahead part is not present.
// Lookaheads are a bit confusing but some examples will help.
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
// Both of these match calls would return ["q"].
// A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password 
// checker that looks for between 3 and 6 characters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);


// Say you want to match a word that occurs multiple times like below.
let repeatStr = "row row row your boat";
// You could use /row row row/, but what if you don't know the specific word repeated? Capture groups can be used to find repeated substrings.
// Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. In this case, the goal is to capture a word
//  consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.
// The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash
//  and the number of the capture group (e.g. \1). Capture 
// groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.
// The example below matches a word that occurs thrice separated by spaces:

let repeatRegex1 = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex1); // Returns ["row row row", "row"]
// Using the .match() method on a string will return an array with the matched substring, along with its captured groups.


// You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex 
// pattern you want to search for. The second parameter is the string to replace the match or a function to do something.
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// The replace call would return the string The sky is blue..
// You can also access capture groups in the replacement string with dollar signs ($).
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// The replace call would return the string Camp Code.

// ANOTHER EXAMPLE:

// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
// Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result1 = hello.replace(wsRegex, ""); // Change this line