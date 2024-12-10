// ### Q9: Convert to Uppercase
// Convert the given string First Letter to uppercase.
// **Example:**
// ```
// Input:
// hello world
// Output:
// Hello World
// ```
function Convert()
{
    let str="hello world";
    let arr=str.split("");
    // console.log(arr);
    let newarr="";

    for(let i=0;i<arr.length;i++)
    {
        if(i==0 || arr[i-1]==" " )
        {
            newarr=newarr+arr[i].toUpperCase();
        }
        else{
            newarr=newarr+arr[i];
        }
    }
    return newarr
    
}
console.log(Convert())