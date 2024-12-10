// Q12:- Find the Next Greater Element of array .
//    Input : [4,5,2,25]
//    output : [5,25,25,-1]

function nextgreaterelement()
{
    let arr=[4,5,2,25];
    let stack=[];
    let newarr=new Array(arr.length).fill(-1);

    for(let i=0;i<arr.length;i++)
    {
        
        while(stack.length>0 && arr[stack[stack.length-1]]<arr[i])
        {
            let update=stack.pop();
            newarr[update]=arr[i];
        }
        stack.push(i);
    }
    return newarr;
}
console.log(nextgreaterelement());
