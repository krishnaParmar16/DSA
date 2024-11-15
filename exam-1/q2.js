// Move All Zeros to the End of the Array


//     Input : let arr = [0, 1, 0, 3, 12];
//     Output : [1, 3, 12, 0, 0]


let arr=[0, 1, 0, 3, 12]
let ans=[];

for(let i=0;i<arr.length;i++)
{
    if(arr[i]==0)
    {
        continue;
    }
    ans.push(arr[i]);   
}
for(let i=0;i<arr.length;i++)
    {
        if(arr[i]!=0)
        {
            continue;
        }
        ans.push(arr[i]);   
    }

console.log(ans);
