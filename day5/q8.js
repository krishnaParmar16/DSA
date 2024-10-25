// modify the array
let arr = [
    [1,2,3],
    [4,5,2],
    [7,2,9]
]
let target = 16

for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr[i].length;j++)
    {
        if(arr[i][j]==2)
        {
            arr[i][j]=target;
        }
    }
}
console.log(arr);
