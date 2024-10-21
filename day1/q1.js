// we have one array and one Target we have to Find that Target , If target present than we have to return its index else -1

// let arr = [1,2,3,4,5,6];
//  let target = 5;
//  output = 4; 


// let arr = [1,2,3,4,5,6];
//  let target = 9;
//  output = -1; 


let a=[1,2,3,4,5,6];
let target=9;


function view()
{
        for(let i=0;i<a.length;i++)
        {
            if(a[i]==target)
            {
                return i;
            }
        }
        return -1;
}

console.log(view());
