// selection sort


let arr=[30,22,14,20,53,30];
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
    let temp=arr[minIndex];
    arr[minIndex]=arr[i];
    arr[i]=temp;
}

console.log(arr);
