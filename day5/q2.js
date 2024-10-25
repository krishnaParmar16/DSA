// modify array

let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// output:  [2,3,4],
//          [5,6,7],
//          [8,9,10]

for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr[i].length;j++)
    {
        arr[i][j]+=1;
    }
    console.log(arr[i]);
    
}