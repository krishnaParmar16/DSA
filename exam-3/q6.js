// Q6. Basic Binary Search
// Write a function that implements binary search to find the target in a sorted array. Return
// the index of the target, or `-1` if not found.
// **Example:**
// Input: `arr = [1, 3, 5, 7, 9, 11]`, `target = 7`
// Output: `3`

function binary(arr,target)
{
    let left=0;
    let right=arr.length-1;

    while(left<=right)
    {
        let mid=Math.floor((left+right)/2);
        if(arr[mid]==target)
        {
            return mid;
        }
        else if(target<arr[mid])
        {
            right=mid-1
        }
        else if(target>arr[mid])
            {
                left=mid+1
            }
    }

}
let arr=[1, 3, 5, 7, 9, 11];
let target=7;
console.log(binary(arr,target));
