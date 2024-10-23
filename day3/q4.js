// selection sort

let arr=[2,23,65,41,27,13];

// arr.sort((a,b)=>a-b)

// console.log(arr);

for(let i=0;i<arr.length-1;i++)
{
    let maxIndex=i;
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[j]>arr[maxIndex])
        {
            maxIndex=j;
        }
    }
    let temp=arr[i];
    arr[i]=arr[maxIndex];
    arr[maxIndex]=temp;
}
console.log(arr);

