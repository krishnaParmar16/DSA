// check balance parentheses using stack

function check()
{
    let str="[({})]"
    let stack=[];

    for(let i=0;i<str.length;i++)
    {
        if(str[i]=="(" || str[i]=="[" || str[i]=="{")
        {
            stack.push(str[i]);
        }
        else if(str[i]==")" || str[i]=="]" || str[i] =="}")
        {
            if(stack.length>0 && (stack[stack.length-1] == "(" && str[i] == ")") || (stack[stack.length-1] == "[" && str[i]==']') || (stack[stack.length-1]=="{" && str[i]=="}"))
            {
                stack.pop()
            }
            else{
                return false;
            }
        }
    }

    if(stack.length == 0)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(check());