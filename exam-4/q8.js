// ### Q8: Check Palindrome
// Check if the given string is a palindrome (considering only alphanumeric characters and ignoring case).
// **Example:**
// ```
// Input:
// A man, a plan, a canal: Panama
// Output:
// true

function ispalindrome(str)
{
    let newstr="";

    for(let char of str)
    {
        if((char>="a" && char <="z") || (char>="A" && char <="Z") || (char>="0" && char <="9"))
        {
            newstr=newstr+char.toLowerCase();
        }
    }

    let reversestr="";
    for(let i=newstr.length-1;i>=0;i--)
    {
        reversestr=reversestr+newstr[i];
    }
    if(reversestr === newstr)
    {
        return true;
    }
    else{
        return false
    }

}
let str="A man, a plan, a canal: Panama";
console.log(ispalindrome(str));