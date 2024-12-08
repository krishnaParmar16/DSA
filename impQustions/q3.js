// Remove duplicates in place from a sorted array and return the length of the unique elements.
function removeDuplicates()
{
    let arr=[2,3,3,4,5,5,5,7,8];
    let left=0;

    for(let right=0;right<arr.length;right++)
    {
        if(arr[right]!=arr[left])
        {
            left++;
            arr[left]=arr[right];
        }
    }
    return left+1;
}
console.log(removeDuplicates());