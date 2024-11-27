// find maximum sum of subarrays with kadane algorithm

let arr=[1,2,3,4,5]
let max=-Infinity;
let currentSum=0;

for(let i=0;i<arr.length;i++)
{
    currentSum=currentSum+arr[i];
    // if(currentSum>max)
    // {
    //     max=currentSum;
    // }

    max=Math.max(currentSum,max)

    if(currentSum<0)
    {
        currentSum=0;
    }
}

console.log(max);
