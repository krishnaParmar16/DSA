// 4. Transpose of a 2D Array
//    Write a function to transpose a given 2D array (swap rows and columns).
//    Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//    Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]


function transpose()
{

    let arr=[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    let newArray=[];

    for(let i=0;i<arr.length;i++)
    {
        newArray[i]=[];
        for(let j=0;j<arr[i].length;j++)
        {
            newArray[i][j]=arr[j][i]
        }
    }
    return newArray;

}

console.log(transpose());
