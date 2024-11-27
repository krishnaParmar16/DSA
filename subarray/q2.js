// maximum sum of subarray

let arr=[1,2,3,4,5];
let max=-Infinity;
for(let i=0;i<arr.length;i++)
{
    let sum=0;
    for(let j=i;j<arr.length;j++)
    {
        sum=sum+arr[j];
        // if(sum>max)
        // {
        //     max=sum
        // }
        max=Math.max(max,sum)
    }
}
console.log(max);
