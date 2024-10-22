// Move all zero End of the Array 

let arr = [0,1,0,1,0,1,0,1,0]
// output = [1,1,1,1,0,0,0,0,0]  

for(let x=0;x<arr.length-1;x++)
{
    let maxIndex=x;
    for(let i=x+1;i<arr.length;i++)
    {
        if(arr[i]>arr[maxIndex])
        {
            maxIndex=i;
        }
    }
    let temp=arr[maxIndex];
    arr[maxIndex]=arr[x];
    arr[x]=temp;
}

console.log(arr);
