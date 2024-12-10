// ### Q1: Find Maximum Element
// Find the largest element in an array

// **Example:**```
// Input:
// 6
// 12 3 45 7 23 9

// Output:
// 45

function maximum()
{
    let arr=[12 ,3 ,45 ,7 ,23 ,9];
    let max=-Infinity;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }

    return max;
}
console.log(maximum());