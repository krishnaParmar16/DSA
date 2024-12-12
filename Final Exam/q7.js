// Implement the binary search algorithm to find an element in a sorted array. Explain both recursive and iterative approaches with examples. Example:
// Input: Array: [1, 3, 5, 7, 9, 11], Target: 7
// Output: Found at index 3. 

function binary()
{
    let arr=[1, 3, 5, 7, 9, 11];
    let target=7;
    let low=0;
    let high=arr.length-1;

    for(let i=0;i<arr.length;i++)
    {
        let mid=Math.floor((low+high)/2)
        if(arr[mid]==target)
        {
            return mid;
        }
        if(arr[mid]<target)
        {
            low=mid+1;
        }
        else if(arr[mid]>target)
        {
            high=mid-1;
        }

    }
}
console.log(binary());