// Pair Sum in a Sorted Array
// Given a sorted array and a target sum, find two numbers in the array whose sum equals the target. Return the indices of the two numbers.

// Example:
// Input: [1, 2, 3, 4, 6], target: 6
// Output: [1, 3] (Since 2 + 4 = 6)


let arr=[1, 2, 3, 4, 6];
let target=6;
let newarr=[];

for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        let sum=arr[i]+arr[j];
        if(sum==target)
        {
            newarr.push(i,j)
        }
    }
}

console.log(newarr);
