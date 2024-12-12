// Write a function to check if a given string containing parentheses is balanced. The function should return true if the string is balanced and false otherwise. Example:
// Input: "({[]})"
// Output: true
// Input: "([)]"Output: false

function checkParentheses()
{
    let str="({[]})"
    let stack=[];

    for(let value of str)
    {
        if(value=="(" || value=="{" || value=="[")
        {
            stack.push(value);
        }
        else if(value==")" || value=="}" || value=="]")
        {
            let a=stack[stack.length-1]
            if(stack.length>0 && (a=="(" && value==")" || a=="{" && value=="}" || a=="[" && value=="]" ))
            {
             stack.pop()   
            }
            else{
                return false;
            }
        }
    }

    if(stack.length==0)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(checkParentheses());
