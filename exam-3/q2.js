// Write a function that removes duplicates in-place from a sorted array and returns the
// length of the modified array.
// **Example:**
// Input: `arr = [1, 1, 2, 2, 3, 4, 4, 5]`
// Output: `5`

let arr=[1, 1, 2, 2, 3, 4, 4, 5];

function duplicates(arr)
{
    let i=0;
    for(let j=0;j<arr.length;j++)
    {
        if(arr[i]!=arr[j])
        {
            i++;
            arr[i]=arr[j];           
        }
    }
    return i+1;
}
console.log(duplicates(arr));
