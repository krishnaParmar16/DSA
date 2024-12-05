// Write a function countOccurrences(arr) that uses a Map to count the occurrences of each element in an array.

function countOccurrences(arr)
{
    const myMap=new Map();
    
    for(let value of arr)
    {
        if(myMap.has(value))
        {
            myMap.set(value,myMap.get(value)+1);
        }
        else
        {
            myMap.set(value,1);
        }
    }
    return myMap
}

let arr=[1,1,2,3,3,3,3,4,5,5]
console.log(countOccurrences(arr));
