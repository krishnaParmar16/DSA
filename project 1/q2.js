// 2. Transpose of a MatrixGiven a matrix, write a function to find its transpose.
// Input:  [
//           [1, 2],
//           [3, 4]
//         ]
// Output: [
//           [1, 3],
//           [2, 4]
//         ]


let arr=[
    [1, 2],
    [3, 4]
]


let matrix=[]
for(let i=0;i<arr.length;i++)
{
    matrix[i]=[];
    for(let j=0;j<arr[i].length;j++)
    {
        matrix[i][j]=arr[j][i];
    }
console.log(matrix[i]);

}

