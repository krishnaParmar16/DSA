// Find the target from sorted rotated array using binary search

function rotated()
{
    
let arr=[4,5,6,1,2,3]
// let arr=[6,1,2,3,4,5]
let low=0;
let high=arr.length-1;
let target=6;

while(low<=high)
{
    let mid=Math.floor((low+high)/2);

    if(target == arr[mid])
    {
        // console.log(mid);
        // break;
        return mid
    }
    

  if(arr[low]<=arr[mid])
  {

    if(target<=arr[mid] && target>=arr[low])
        {
           high=mid-1
        }
    else
        {
            low=mid+1;
        } 

  }
  else{
    if(target>=arr[mid] && target<=arr[high])
    {
        low=mid+1;
    }
    else
    {
        high=mid-1;
    }
  }

    
}

    return -1;
}
console.log(rotated());