// Q11 :- Write a function findIntersection(arr1, arr2) that returns the intersection of two arrays using a Set.
// Input : [1, 2, 3, 4], [3, 4, 5, 6]
// output : [3, 4]

function findIntersection(arr1, arr2)
{
    let myset=new Set(arr1);
    let newArr=[];

    for(let value of arr2)
    {
        if(myset.has(value))
        {
            newArr.push(value)
        }
    }
    return newArr;
}
let arr1=[1, 2, 3, 4];
let arr2=[3, 4, 5, 6];
console.log(findIntersection(arr1, arr2));