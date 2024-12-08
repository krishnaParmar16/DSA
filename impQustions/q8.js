// Search for a target in a rotated sorted array.
function rotated()
{
    // let arr=[5,1,2,3,4]
    let arr=[4,5,6,1,2,3]
    let target=3;

    let left=0;
    let right=arr.length-1;

    while(left<=right)
    {
        let mid=Math.floor((left+right)/2);
        if(arr[mid]==target)
        {
            return mid;
        }

        if(arr[left]<=arr[mid])
        {
            if(target>=arr[left] && target<=arr[mid])
            {
                right=mid-1;
            }
            else{
                left=mid+1;
            }
        }
        else{
            if(target>=arr[mid] && target<=arr[right])
            {
                left=mid+1;
            }
            else{
                right=mid-1;
            }
        }
    }

}
console.log(rotated());