// Write a function countOccurrences(arr) that uses a Map to count the occurrences of each element in an array.

// Input: [1, 2, 2, 3, 3, 3]
// Output: {1 => 1, 2 => 2, 3 => 3}

function countOccurrences(arr)
{
    const myMap= new Map();

  for(let value of arr)
  {
    // console.log(value);
    if(myMap.has(value))
        {
         myMap.set(value,myMap.get(value)+1)
        }   
    else{
        myMap.set(value,1);
    }     
  }

    return myMap;
   
    
}

let arr=[1, 2, 2, 3, 3, 3];
console.log(countOccurrences(arr))