// Check if a Target Element is Present in an Array
// Given an array and a target value, check if the value exists in the array and return true or false.

let arr=[4, 7, 1, 9]
let target=5;
 
function check(arr,target)
{
    for(let i=0;i<arr.length;i++)
        {
            if(target==arr[i])
            {
                return true;
            }
        }
        return false;
}

console.log(check(arr,target));
