// Write a function getUnique(arr) that takes an array and returns an array of unique elements using a Set.
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

function getUnique(arr) 
{
    let newArr=[];
    const mySet= new Set(arr);

    for(let value of mySet)
    {
        newArr.push(value)
    }
    return newArr;
}

let arr=[1, 2, 2, 3, 4, 4, 5]
console.log(getUnique(arr));