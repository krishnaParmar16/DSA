// find the given target and return it's index using binary search

let arr=[2,4,6,9,12,19]
let lower=0;
let upper=arr.length-1;
let target=12;

while(lower<=upper)
{
    let mid=Math.floor((lower+upper)/2);
    if(arr[mid]==target)
    {
        console.log(mid);
        break;
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