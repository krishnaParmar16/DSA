// 3. Search Element in Matrix
// Write a program to search for an element in a matrix. The matrix is sorted row-wise and column-wise.
// Input Matrix: [
//                 [1, 4, 7],
//                 [2, 5, 8],
//                 [3, 6, 9]
//               ]
// Target: 6  
// Output: true

let arr=[
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]
let target=6;
let result=false;

for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr.length;j++)
    {
        if(arr[i][j]==target)
        {
            result=true;
        }
       
    }
}

console.log(result);
