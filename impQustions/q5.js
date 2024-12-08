// Implement the binary search algorithm to find a target element.
let arr=[2,5,7,9,12];
let target=9;
function binary(arr,target)
{
    let left=0;
    let right=arr.length-1;

    while(left<=right)
    {
        let mid=Math.floor((left+right)/2)

        if(arr[mid]==target)
        {
            return mid;
        }
        
        if(arr[mid]<target)
        {
            left=mid+1;
        }
        else if(arr[mid]>target)
        {
            right=mid-1;
        }
        
    }

}
console.log(binary(arr,target));