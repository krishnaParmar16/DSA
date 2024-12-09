// Question 2 :  Given an array [4, 5, 2, 25], find the next greater element for each element.

function next()
{
    let arr=[4,5,2,25];
    let newarr=Array(arr.length).fill(-1)
    let stack=[];

    for(let i=0;i<arr.length;i++)
    {
        stack.push(i);

        if(arr[i+1] >arr[i])
        {
            // console.log(arr[i+1]);
            
            while(stack.length>0)
            {
                let great=stack[stack.length-1];
                newarr[great]=arr[i+1];
                stack.pop()
            }
        }
    }
    return newarr;
}
console.log(next());