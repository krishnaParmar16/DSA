// Sum of Array Elements

function add(arr,n)
{
    if(n==0)
        {
            return arr[n];
        }    
    return arr[n] + add(arr,n-1)
}

console.log(add([1,2,3,4,5,6],5));
