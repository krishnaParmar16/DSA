// count subarray with given target(sum);

let arr=[1,1,1,1]
let target=2;
let count=0;

for(let i=0;i<arr.length;i++)
{
    let sum=0;
    for(let j=i;j<arr.length;j++)
    {
        sum=sum+arr[j];
        if(sum==target)
            {
                count++;
            }
    }
    
}

console.log(count);


