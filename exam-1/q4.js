
// 4) Do, sorting of array using Selection Sort


let arr=[3,6,43,23,61,10]

for(let i=0;i<arr.length;i++)
    {
        let min=i;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]>arr[min])
            {
                min=j;
            }
            let temp=arr[min];
            arr[min]=arr[i];
            arr[i]=temp;
        }
    }
    console.log(arr);