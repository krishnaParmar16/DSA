// Q4. Fibonacci Using Recursion
// Write a recursive function to compute the `n`-th Fibonacci number.
// **Example:**
// Input: `n = 6`
// Output: `8`

function Fibonacci(num)
{
    if(num<=1)
    {
        return num;
    }
    return Fibonacci(num-1)+Fibonacci(num-2);
}
let num=6;
console.log(Fibonacci(num));
