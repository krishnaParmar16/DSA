// 4. Sort the Array with any sorting Algorithm 
// Input [5,6,8,7,4,6,3,9,2,1] 
// Output[1,2,3,4,5,6,7,8,9]

let a=[5,6,8,7,4,6,3,9,2,1] ;

for(let i=0;i<a.length-1;i++)
{   
    let minimum=i;
    for(let j=i+1;j<a.length;j++)
    {
        if(a[j]<a[minimum])
        {
            minimum=j;
        }
    }
    let temp=a[i];
    a[i]=a[minimum];
    a[minimum]=temp;
}

console.log(a);
