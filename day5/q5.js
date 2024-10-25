// find maximum value from array

let arr = [
    [17,27,13],
    [4,15,22],
    [70,82,43]
]

// output:9
let max=0;
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr[i].length;j++)
    {   
        if(arr[i][j]>max)
        {
            max=arr[i][j];
        }
    }
}
console.log("Largest value is:"+max);
