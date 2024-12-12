// Given an array, write a function to find the next greater element for each element in the array. If no such element exists, return -1. Example:
// Input: [4, 5, 2, 25]
// // Output: [5, 25, 25, -1] 

function greaterElement()
{
    let arr=[4, 5, 2, 25];
    let newArr=Array(arr.length).fill(-1);

    let stack=[];

    for(let i=0;i<arr.length;i++)
    {
        stack.push(i)
        if(arr[i+1]>arr[i])
        {
            // console.log(arr[i+1]);
            
            while(stack.length>0)
            {
                let update=stack[stack.length-1];
                newArr[update]=arr[i+1];
                stack.pop();            
            }
        }
    }
    return newArr;

}
console.log(greaterElement());
