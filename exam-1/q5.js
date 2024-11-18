
let arr=[1,2,3,4,5]

function ans()
{
    let min=Infinity;
    let max=-Infinity;
    let sum=0;
for(let i=0;i<arr.length;i++)
{
    sum=sum+arr[i]
if(arr[i]>max)
{
    max=arr[i];
}
if(arr[i]<min)
    {
        min=arr[i];
    }
}
let minsum=sum-min;
let maxsum=sum-max;

console.log(maxsum,minsum);

}

ans()
