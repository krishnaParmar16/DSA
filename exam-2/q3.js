// 3. Row Sum of a 2D Array
//    Write a function to calculate the sum of elements in each row of a 2D array and return the result as a 1D array.
//    Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//    Output: [6, 15, 24]

function row()
{
    let arr=[[1, 2, 3],
             [4, 5, 6], 
             [7, 8, 9]];

    let newArray=[];

    for(let i=0;i<arr.length;i++)
    {
        let sum=0;
        for(let j=0;j<arr.length;j++)
        {
            sum=sum+arr[i][j];
        }
        // console.log(sum);
        newArray.push(sum);
        
    }
    return newArray;

}

console.log(row());
