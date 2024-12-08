// Given an array, move all zeros to the end while maintaining the order of other elements.

function moveZero()
{
    let arr=[0,2,0,5,0,3];
    let newarr=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==0)
        {
            continue;
        }
        newarr.push(arr[i]);
    }
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]!=0)
        {
            continue;
        }
        newarr.push(arr[i]);
    }
    return newarr;
}
console.log(moveZero());

