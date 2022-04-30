// Solve the following string/math/number/function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.

//STEP 1
// Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
// Sample Data and Output
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'


// function alphabet_order(str)
//   {
// return str.split('').sort().join('');
//   }
// console.log(alphabet_order("webmistress"));



//STEP 2
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.
// Sample Data and Output
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox'
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.


// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));


//STEP 3
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Sample Data and Output
// Example string: 'The quick brown fox' 
// Expected Output: 5


// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));


//STEP 4
// Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample Data and Output
// Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA


// function makeid(l)
// {
// var text = "";
// var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// for(var i=0; i < l; i++ )
// {  
// text += char_list.charAt(Math.floor(Math.random() * char_list.length));
// }
// return text;
// }
// console.log(makeid(8));



//STEP 5   !!!!!!!!!!!!!!!!!!! NOT WORKING YET NEEDS MORE

// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Sample Data and Output
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

// let longestCountryLength;
// let countries = [('Australia', 'Germany', 'United States of America')];
// function Longest_Country_Name (countries) { 
//     let previousCountryLength = 0;
//     let longestCountryLength = 0;
//     let longestCountryName;

//     countries.forEach((country, index) => {
//         previousCountryLength = longestCountryLength;
//         let letters = country.split("");
//         longestCountryLength = letters.length;
//         if (previousCountryLength > longestCountryLength) {
//             longestCountryLength = previousCountryLength;
//             longestCountryName = countries[index-1];
//         } else {
//             longestCountryName = countries[index];
//         }
//     });

//     return longestCountryName;
// }
// function Longest_Country_Name(countries) {
//     let longestCountry = countries[0];
//     for (let country of countries) {
//         if (country.length > longestCountry.length) {
//             longestCountry = country;
//         }
//     }
//     return longestCountry;
// }
// function Longest_Country_Name(countries) {
//     return countries.sort((c2, c1) => c1.length - c2.length)[0];
// }


let index = 0;
let length = 0;
let name = "";
function countries () {
for(let i = 0; i < countries.length; i++){
    if(countries[i].length > length){
        length = countries[i].length;
        index = i;
        name = countries[i];
    }
    console.log(countries());
}};

// Sample Data and Output
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"



