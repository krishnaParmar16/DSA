// // Find the minimum element in a rotated sorted array.

function minele()
{
  
    let arr=[5,6,7,8,1,2,3,4];
   let low=0;
   let high=arr.length-1;

   while(low < high)
   {
    let mid=Math.floor((low+high)/2);

    if(arr[mid]>arr[high])
    {
        low=mid+1;
    }
    else{
        high=mid;
    }
   }

   return arr[low];
 
   
}
console.log(minele());

