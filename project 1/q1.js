// 1. Sum of Diagonal Elements
// Write a program to find the sum of the diagonal elements of a square matrix.
// Input: [
// [2, 3, 4],
// [5, 6, 7],
// [8, 9, 1]
// ]
// Output: 9 (2 + 6 + 1)  


let arr=[
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 1]
    ]

  

    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr[i].length;j++)
        {
            arr[i][j]=arr[i][j]
        }
        console.log(arr[i]);
    }

    let sum=0;
    for(let i=0,j=0;i<arr.length;i++,j++)
    {
        sum+=arr[i][j]
    }
    // console.log("Sum of diagonal element is: "+sum);
    

    // for(let i=0;i<arr.length;i++)
    // {
    //     for(j=0;j<arr[i].length;j++)
    //     {
    //         if(arr[i]==arr[j])
    //         {
    //             sum+=arr[i][j]
    //         }
    //     }
    // }
    // console.log("Sum of diagonal element is: "+sum);
