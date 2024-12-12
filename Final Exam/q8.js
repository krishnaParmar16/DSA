// Write a program to check if there exist two numbers in a sorted array whose sum equals a given target using the two-pointer technique. Example:
// Input: Array: [1, 2, 3, 4, 5, 6], Target: 9
// Output: true (Numbers: 3 and 6). 
let arr = [1,2,3,4,5,6]
let target  = 9;

function sum(arr,target)
{
    let left = 0;
   let right = arr.length-1;
   let ans = 'false';

   while(left<=right)
   {
    let sum = arr[left] + arr[right];
   

    if(sum==target)
    {
      ans = true 
      break;
      
    }

    if(sum < target)
    {
        left++ ;
    }
    else{
        right--;
    }
   }
   console.log(ans);
   
}

sum(arr,target);
