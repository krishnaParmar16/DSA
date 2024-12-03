// Q1. Pair with Target Sum
// Given a sorted array `arr` and a target sum `target`, write a function that finds and returns
// the indices of two numbers such that their sum equals `target`. If no such pair exists, return
// `[-1, -1]`.
// **Example:**
// Input: `arr = [1, 2, 3, 4, 6]`, `target = 6`
// Output: `[1, 3]`

let arr = [1, 2, 3, 4, 6];
let  target = 6;
function call(arr,target)
{
    let left=0;
    let right=arr.length-1;

    while(left<=right)
    {
        let sum=arr[left]+arr[right];

        if(sum == target)
        {
            return [left,right]
        }
        else if(sum>target){
            right--;
        }
        else if(sum<target){
            left++;
        }
    }

    return [-1,-1];
}

console.log(call(arr,target));