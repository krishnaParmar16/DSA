// Find the maximum Element  from the Array

// let arr = [1,2,3,4,5,6];
//  output = 6; 

// let arr = [1,9,3,8,5,6];
//  output = 9; 

let a=[-1,-4,-6,-2,0]
let max= -Infinity;
function view()
{
    for(let i=0;i<a.length;i++)
    {
        if(max < a[i])
        {
            max = a[i];
        }
    }
    console.log(max)

}

view()
