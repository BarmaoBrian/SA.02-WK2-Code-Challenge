//create function generate array

2.


function generateArray(start, end) {
    const arr = [];
    const increment = start < end ? 1 : -1;
  
    for (let i = start; i !== end + increment; i += increment) {
      arr.push(i);
    }
  
    return arr;
  }
  
  console.log(generateArray(4, 7)); //result [4,5,6,7]
  console.log(generateArray(11, 14)); //result [11,12,13,14] 
  