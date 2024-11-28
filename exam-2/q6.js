// 6. Update Diagonal Elements
//    Write a function to modify all diagonal elements of a 4x4 matrix to 0.
//    Input: [[5, 1, 2, 3], [4, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
//    Output: [[0, 1, 2, 3], [4, 0, 7, 8], [9, 10, 0, 12], [13, 14, 15, 0]]


function element()
{
    let arr=[[5, 1, 2, 3],
             [4, 6, 7, 8],
             [9, 10, 11, 12],
             [13, 14, 15, 16]]
    
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++)
        {
            if(i==j)
            {
                arr[i][j]=0;
            }
        }
    }
    return arr;
}

console.log(element());

