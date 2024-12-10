// ### Q10: Remove Spaces
// Remove all spaces from the given string.
// **Example:**
// Input:
// hello world python
// Output:
// helloworldpython

function removeSpace()
{
    let str="hello world python";
    let newstr="";
    for(let i=0;i<str.length;i++)
    {
        if(str[i]!=" ")
        {
            newstr=newstr+str[i];
        }
    }
    return newstr;
}
console.log(removeSpace());
