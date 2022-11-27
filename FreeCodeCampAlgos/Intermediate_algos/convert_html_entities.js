// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

//examples:
// convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
// convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
// convertHTML("Schindler's List") should return the string Schindler&apos;s List.
// convertHTML("<>") should return the string &lt;&gt;.
// convertHTML("abc") should return the string abc.

//given function
// function convertHTML(str) {
//     return str;
//   }


  function convertHTML(str) {
//make for loop to iterate thru each char, then  a bunch of if statements to target each char u want to change, and use replace() method to change element
//COULD ALSO USE indexOf() to target each element , ie str[i].indexOf("&") >= 0 would work to target & symbol
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "&") {
            str = str.replace(str[i], "&amp;")
        }
        if (str[i] === "<") {
            str = str.replace(str[i], "&lt;")
        }
        if (str[i] === ">") {
            str = str.replace(str[i], "&gt;")
        }
        if (str[i] === "'") {
            str = str.replace(str[i], "&apos;")
        }
        //switched from double to single quotes so it wouldnt bug
        if (str[i] === '"') {
            str = str.replace(str[i], "&quot;")
        }
    }
    return str
  }

  console.log(convertHTML("Dolce & Gabbana"))
  console.log(convertHTML("Schindler's List"))
  console.log(convertHTML('Stuff in "quotation marks"'))
  console.log(convertHTML("<>"))


//   another answer:
function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str
      .split("")
      .map(entity => htmlEntities[entity] || entity)
      .join("");
  }
