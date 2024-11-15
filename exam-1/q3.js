// 3) Check if an Array is Sorted
//      Input : let arr = [1, 2, 3, 4, 5];
//      output : true
//      Input : [5, 3, 1, 4, 2];
//      output : false


let arr = [1, 2, 3, 4, 5];

function ans()
{
    for(let i=0; i<arr.length;i++)
        {
            if(arr[i]<arr[i+1])
            {
                return true;
            }
            return false;
        }
}

console.log(ans());

