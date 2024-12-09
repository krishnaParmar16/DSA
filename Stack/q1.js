// reverse the string using stack

function reverse()
{
    let str="hello";
    let stack=[];

    for(let value of str)
    {
        stack.push(value);
    }
    let newStr="";
    while(stack.length > 0)
    {
        newStr=newStr+stack.pop()
    }
    return newStr;
}
console.log(reverse());