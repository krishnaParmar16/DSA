// Find the Index of the Last Occurrence of an Element
// Given an array of integers, return the index of the last occurrence of a target element. If the target is not found, return -1.

let arr=[1, 2, 3, 2, 4];
let target=2;

for(let i=arr.length-1;i>=0;i--)
{
 if(arr[i]==target)
    {
        console.log(i);
        break;
    }   
}