// n this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Function Description

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// int ar[n]: an array of integers .

let arr=[1000000001 ,1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum;
}
console.log(aVeryBigSum(arr));
