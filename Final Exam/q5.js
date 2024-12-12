// Write a function to reverse a string using a stack. Do not use built-in string reversal functions. Example:
// Input: "hello"
// Output: "olleh" 

function reverse()
{
    let str="hello";
    
    let stack=[];

    for(let i=0;i<str.length;i++)
    {
        stack.push(str[i]);
    }
    let reverse="";

    while(stack.length>0)
    {
        reverse=reverse+stack.pop()
    }

    return reverse;
}

console.log(reverse());
