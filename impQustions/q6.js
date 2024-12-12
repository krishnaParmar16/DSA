// Find the first and last position of a target in a sorted array.

function position()
{

    let arr=[1,2,2,2,12,19]
    let target=2;

    function first(arr,target)
    {
        let lower=0;
        let upper=arr.length-1;
        let ans=-1;

        while(lower<=upper)
        {
            let mid=Math.floor((lower+upper)/2);
            if(arr[mid]==target)
            {
                ans=mid;
                upper=mid-1;
            }
            if(arr[mid]<target)
            {
                lower=mid+1;
            }
            else if(arr[mid]>target)
            {
                upper=mid-1;
            }
        }

        return ans;
    }

    function last(arr,target)
    {
        let lower=0;
        let upper=arr.length-1;
        let ans=-1;

        while(lower<=upper)
        {
            let mid=Math.floor((lower+upper)/2);
            if(arr[mid]==target)
            {
                ans=mid;
                lower=mid+1;
            }
            if(arr[mid]<target)
            {
                lower=mid+1;
            }
            else if(arr[mid]>target)
            {
                upper=mid-1;
            }
        }
        return ans;
    }

    let firstPosition=first(arr,target);
    let lastPosition=last(arr,target);

    return [firstPosition,lastPosition]

}
console.log(position());