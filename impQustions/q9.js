// Find the minimum element in a rotated sorted array.


    let arr=[26,11,13,14,15];
   let low=0;
   let high=arr.length-1;

   while(low<=high)
   {
    let mid=(Math.floor(low+high)/2);

    if(arr[mid]>arr[high])
    {
        low=mid+1;
    }
    else{
        high=mid;
    }
   }

   console.log(arr[low]);
 