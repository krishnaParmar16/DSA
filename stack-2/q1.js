// Question 1: Balance Parenthesis 
function balanceparenthesis()
{
    let str="[{}()]";
    let stack=[];

    for(let value of str)
    {
        if(value=="(" || value=="{" || value=="[")
        {
            stack.push(value);
        }
        else if(value==")" || value=="}" || value=="]")
        {
            if(stack.length>0 && (stack[stack.length-1] == "(" && value == ")") || (stack[stack.length-1] == "[" && value==']') || (stack[stack.length-1]=="{" && value=="}"))
            {
                stack.pop();
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
    else {
        return false;
    }

}
console.log(balanceparenthesis());