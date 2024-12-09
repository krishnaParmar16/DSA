//  Write a function isPalindrome(str) to check if a string is a palindrome using a stack.
//  "radar" true  

function isPalindrome(str){

    let stack=[];
    for(let value of str)
    {
        stack.push(value);
    }
    let reverseStr="";

    while(stack.length>0)
    {
        reverseStr=reverseStr+stack.pop();
    }
    console.log(reverseStr);
    
    if(reverseStr==str)
    {
        return true;
    }
    else{
        return false
    }
}
let str="radar";
console.log(isPalindrome(str));