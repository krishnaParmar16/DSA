// Given an array that has been , write a program to find the index of a target value using a modified binary search algorithm. If the target is not found, return -1.Example:
// Input: Array = [4, 5, 6, 7, 0, 1, 2], Target = 0
// Output: 4
// Input: Array = [4, 5, 6, 7, 0, 1, 2], Target = 3
// // Output: -1

function binary()
{
    let arr=[4, 5, 6, 7, 0, 1, 2];
    let target=0;
    let low=0;
    let high=arr.length-1;

    for(let i=0;i<arr.length;i++)
    {
        let mid=Math.floor((low+high)/2)
        if(arr[mid]==target)
        {
           return  mid;
        }

        if(arr[mid]>=arr[low])
        {
            if(target<=arr[mid] && target>=arr[low])
            {
                high=mid-1
            }
            else{
                low=mid+1
            }
        }
       else{
        if(target>=arr[mid] && target<=arr[low])
            {
                low=mid+1;
            }
            else{
                high=mid-1;
            }
       }
    }
    return -1;
}
console.log(binary());