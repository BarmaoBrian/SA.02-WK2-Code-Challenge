//initialise function swapcase
//use of if / else as our conditional statement


1.

function swapCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        result += str[i].toLowerCase();
      } else {
        result += str[i].toUpperCase();
      }
    }
    return result;
  }
  
  
  console.log(swapCase('The Quick Brown Fox')); // Output: tHE qUICK bROWN fOX
  console.log(swapCase('MOringa ScHool')); // Output: MOringa ScHool


  