// find the last occurence index of given array using binary search

let arr=[1,2,2,2,12,19]
let target=2;
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

console.log(ans);
