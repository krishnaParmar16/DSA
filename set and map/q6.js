// Write a function findIntersection(arr1, arr2) that returns the intersection of two arrays using a Set.
// Example findIntersection([1, 2, 3, 4], [3, 4, 5, 6]);
// Output: [3, 4]

function findIntersection(arr1,arr2)
{
    const mySet=new Set(arr1);

    let newarr=[];

    for(let value of arr2)
    {
        if(mySet.has(value))
        {
            newarr.push(value);
        }
    }
    return newarr;
}
let arr1=[1, 2, 3, 4];
let arr2=[3, 4, 5, 6];
console.log(findIntersection(arr1,arr2));
