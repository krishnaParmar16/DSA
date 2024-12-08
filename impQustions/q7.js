// Find the minimum element in a rotated sorted array.

function min()
{
    let arr=[4,5,6,1,2,3];
    let min=Infinity;
    let left=0;
    let right=arr.length-1;

    while(left<=right)
    {
        let mid=Math.floor((left+right)/2);

        if(arr[mid]<min)
        {
            min=arr[mid];
            return min;
        }
       
      

    }
}
console.log(min());