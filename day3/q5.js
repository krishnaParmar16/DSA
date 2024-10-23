// selection sort

let arr=[12,32,38,61,46,41,39];

for(let i=0;i<arr.length-1;i++)
{
    let minIndex=i;
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[j]<arr[minIndex])
        {
            minIndex=j;
        }
    }
    let temp=arr[i];
    arr[i]=arr[minIndex];
    arr[minIndex]=temp;
}

console.log(arr);
