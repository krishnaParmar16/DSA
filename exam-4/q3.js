// ### Q3: Row Sum
// Calculate the sum of elements in each row of a matrix.
// **Example:**
// ```
// Input:
// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// Output:
// 10
// 26
// 42
function rowSum()
{
    let arr=[
        [1 ,2 ,3 ,4],
        [5 ,6 ,7 ,8],
        [9 ,10 ,11 ,12]
            ]
   
    for(let i=0;i<arr.length;i++)
    {
    let sum=0;
        for(let j=0;j<arr[i].length;j++)
        {
            sum=sum+arr[i][j];
        }
         console.log(sum);
    }
   
}
rowSum();