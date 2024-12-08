// Given a sorted array and a target sum, find if there is a pair with the given sum.

let arr=[1,2,3,4];
let target=7;

let left=0;
let rigth=arr.length-1;

while(left<=rigth)
{
    let sum=arr[left]+arr[rigth];
    if(sum==target)
    {
        console.log([left,rigth]);
        break;
    }
    else if(sum>target)
    {
        rigth--;
    }
    else if(sum<target)
    {
        left++;
    }
}