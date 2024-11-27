// Reverse a String Using Two Pointers
// Given a string, reverse it using two pointers (one at the start and one at the end).

// Example:
// Input: "hello"
// Output: "olleh"

let a="hello";
let arr=a.split('');
   

let left=0;
let right=arr.length-1;

while(left<right)
{
    let temp=arr[left];
    arr[left]=arr[right];
    arr[right]=temp;

    left++;
    right--;
}

console.log(arr.join(''));

    