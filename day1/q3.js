// Reverse the Array 

// let arr = [1,2,3,4,5,6];
//  output = [6,5,4,3,2,1]; 


let a=[1,2,3,4,5,6];
let arr=[];


for(let i=a.length-1;i>=0;i--)
{
    arr.push(a[i]);
}

console.log(arr);