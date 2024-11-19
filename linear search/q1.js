// Find the First Occurrence of a Target Element
// Given an array of integers, find the first index where a target element appears. Return -1 if the target is not found.

let arr=[10, 20, 30, 40, 50];
let target=30;

for(let i=0;i<arr.length;i++)
{
    if(arr[i]==target)
    {
        console.log(i);
        break;
    }
}