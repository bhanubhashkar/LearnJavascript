
//#####----- JavaScript Scripts -----------------------------------------------------------------------------------------------------------#####

let myName = "Bhanu Bhashkar";
let myRole = new String("Engineer");

console.log("My Name is " + myName + " and role is " + myRole + ". Using + operator.");

console.log(`My name is ${myName} and role is ${myRole}. Using backtick string interpolation.`);


let newString = new String("I am a string.");
let anotherString = new String("I am a string.");
const regExp = /[a-c]/;


// length           :   Gives length of the string.
console.log(newString.length);

// String()         :   Create/concert to a string object.
console.log(String(newString));

// constructor()

// italics()        :   Depricated
// fixed()          :   Depricated
// small()          :   Deprecated
// strike()         :   Deprecated
// sub()            :   Deprecated
// substr()         :   Deprecated
// sup()            :   Deprecated

// big              :   Creates big HTML tag. Depricated.
console.log(newString.big());

// blink            :   Creates blink HTML tag. Depricated.
console.log(newString.blink());

// bold             :   Creates b (bold) HTML tag. Depricated.
console.log(newString.bold());

// anchor           :   Creates anchor HTML tag with name. Depricated.
console.log(newString.anchor('thisIsName'));

// fontsize()       :   Sets the size attribute value of HTML font element. Depricated.
console.log(newString.fontsize("10"));

// fontcolor()      :   Sets the color attribute value of HTML font element. Depricated.
console.log(newString.fontcolor("red"));

// link()           :   Sets the href attribute value of HTML a element. Depricated.
console.log(newString.link("www.abc.com"));



// concat()         :   Concatinate String in any string.
console.log(newString.concat(" This is Cancatinated string."));

// at               :   Gives the character values of any index.
console.log(newString.at(3));

// charAt()         :   Gives the character values of any index.
console.log(newString.charAt(3));

// charCodeAt()     :   Gives the character ascii value for the index.
console.log(newString.charCodeAt(3));

// codePointAt()    :   Gives the character ascii value for the index.
console.log(newString.codePointAt(3));

// indexOf()        :   Gives index of given character in the string.
console.log(newString.indexOf("a"));

// lastIndexOf()    :   Gives last index of given character in the string.
console.log(newString.lastIndexOf("a"));

// endsWith()       :   Gives true/false boolean after comparing given value is at ending of string or not.
console.log(newString.endsWith("ring."));

// includes()       :   Gives true/false boolean after comparing given value is there in the string or not.
console.log(newString.includes("am"));

// isWellFormed()   :   Gives true/false boolean after checking if the string contains a lone surrogate or not. I false cant use the encodeURI() method on it.
console.log(newString.isWellFormed());



// localeCompare()  :   Gives 0,1 (+,-) value after comparing two string.
console.log(newString.localeCompare(anotherString));

// match()          :   Gives index value after comparing string with given regex.
console.log(newString.match(/rin/));

// matchAll()       :   Gives 
// console.log(newString.matchAll(regExp)); //error

// normalize()      :   Unicode Normalization
// console.log(newString.normalize());

// padEnd()         :   Add given value after the string till givem index reaches string total index.
console.log(newString.padEnd(20, '.'));

// padStart()       :   Add given value before the string till givem index reaches string total index.
console.log(newString.padStart(20, '*'));

// repeat()         :   Repeat the string valur specified times.
console.log(newString.repeat(5));

// replace()        :   Replace the string part with given value.
console.log(newString.replace("I am", "This is"));

// replaceAll()     :   Replace all occurance of string part with given value.
console.log(newString.replaceAll("a", "A"));

// search()         :   Search the term in string and give index of first ocuurance.
console.log(newString.search("I"));

// slice()          :   Slice the string.
console.log(newString.slice("2"));          // Slice the string from begining till given index and return remaining.
console.log(newString.slice("2","4"));      // Slice and return the string between two given index from start.
console.log(newString.slice("-7"));         // Slice the string from last till given index and return remaining.
console.log(newString.slice("-12","-10"));  // Slice and return the string between two given index from last.

// split()          :   Split the string.
console.log(newString.split(" "));          // Split the string with given parameter (space).

const words = newString.split(' ');         // Split the string with space seperated and save in a array variable.
console.log(words[1]);                      // Log the desired index word.

const chars = newString.split('');          // Split the string with character wise and save in a array variable.
console.log(chars[5]);                      // Log the desired index character.

const strCopy = newString.split();          // Split the string and save in a array variable.
console.log(strCopy);                       // Log the desired index character.

// startsWith()     :   Gives true/false boolean after checking string begins with the characters of a specified string or not
console.log(newString.startsWith("I"));



// substring()      :   Create a substring.
console.log(newString.substring(0,4));      // Retuen values between given indexes.
console.log(newString.substring(5));        // Retuen the remaining values adter given indexes .


// toLocaleLowerCase
//  toLocaleLowerCase()
// toLocaleUpperCase
//  toLocaleUpperCase()
// toLowerCase
//  toLowerCase()
// toString
//  toString()
// toUpperCase
//  toUpperCase()
// toWellFormed
//  toWellFormed()
// trim
//  trim()
// trimEnd
//  trimEnd()
// trimLeft
//  trimStart()
// trimRight
//  trimEnd()
// trimStart
//  trimStart()
// valueOf
//  valueOf()
// Symbol(Symbol.iterator)
//  [Symbol.iterator]()