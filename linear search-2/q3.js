// Remove Duplicates from a Sorted Array
// Given a sorted array, remove the duplicates in-place using the two-pointer technique. You should return the new length of the array after removing duplicates.

// Example:
// Input: [1, 1, 2, 3, 3, 4]
// Output: 4 (The modified array will be [1, 2, 3, 4])

let arr=[1, 1, 2, 3, 3, 4]

let left=0;

for(let right=0;right<arr.length;right++)
{
    if(arr[right]!=arr[left])
    {
        left++;
        arr[left]=arr[right];
    }
}
    
console.log(left+1);
