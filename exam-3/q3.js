// Q3. Factorial Using Recursion
// Write a recursive function to compute the factorial of a non-negative integer `n`.
// **Example:**
// Input: `n = 5`
// Output: `120`
let num=5;
function factorial(num)
{
    if(num==1)
    {
        return 1;
    }
    return num*factorial(num-1)
}
console.log(factorial(num));
