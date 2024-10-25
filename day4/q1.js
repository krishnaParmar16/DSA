// bubble sort

let arr = [53,2,1254,4,5,6];


for(let i=0;i<arr.length-1;i++)
{
    let con=false
    for(let j=0;j<arr.length-i-1;j++)
    {
        if(arr[j]>arr[j+1])
        {
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            con=true;
        }
    }
    if(con==false)
    {
        break;
    }
}

console.log(arr);
