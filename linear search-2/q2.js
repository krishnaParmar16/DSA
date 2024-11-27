// Reverse a String Using Two Pointers
// Given a string, reverse it using two pointers (one at the start and one at the end).

// Example:
// Input: "hello"
// Output: "olleh"

let a="hello";
let arr=a.split('');
   

let start=0;
let end=arr.length-1;

while(start<end)
{
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;

    start++;
    end--;
}

console.log(arr.join(''));

    