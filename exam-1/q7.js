arr = [-4, 3, -9, 0, 4, 1]

let size=arr.length;
let plus=0,minus=0,zero=0;
for(let i=0;i<arr.length;i++)
{
        if(arr[i]>0)
        {
            plus++;
        }
        if(arr[i]<0)
        {
            minus++;
        }
        if(arr[i]==0)
        {
            zero++;
        }
}
// console.log(plus,minus,zero);

let pans=plus/size;
let mans=minus/size;
let zans=zero/size;

console.log(pans.toFixed(6));
console.log(mans.toFixed(6));
console.log(zans.toFixed(6));

