// 7. Replace Specific Value in 2D Array
//     Implement a function to replace all occurrences of a specific value in a 2D array with another given value.
//     Input: 2D Array [[1, 2, 3], [4, 5, 6], [7, 8, 9]], Replace value 5 with 50.
//     Output: [[1, 2, 3], [4, 50, 6], [7, 8, 9]]

let value=5;
let changeValue=50;
function replace(value,changeValue)
{
    let arr=[[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    for(i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr[i].length;j++)
        {
            if(arr[i][j]==value)
            {
                arr[i][j]=changeValue;
            }
        }
    }

    return arr;
}
console.log(replace(value,changeValue));
