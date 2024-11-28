// Section A: Sorting Algorithms

// 1. Selection Sort
//    Write a function in JavaScript to implement the selection sort algorithm.
//    Input: [29, 10, 14, 37, 13]
//    Output: [10, 13, 14, 29, 37]

function sort()
{
    let arr= [29, 10, 14, 37, 13];

    for(let i=0;i<arr.length;i++)
    {
        let min=i;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[min])
                {
                    min=j;
                }   
        }
        let temp=arr[min];
        arr[min]=arr[i];
        arr[i]=temp;
    }

    return arr;
}

console.log(sort());
