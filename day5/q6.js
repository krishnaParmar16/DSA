// Reverse Transver    

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// output:[
//     [3,6,9],
//     [2,5,8],
//     [1,4,7]
// ]

let matrix=[];

for(let i=0;i<arr.length;i++)
{
    // matrix[i]=[];
    for(let j=arr[i].length-1;j>=0;j--)
    {
       console.log(arr[j][i]);
    }
}
// console.log(matrix);
