// Q5. Sum of Digits
// Write a function that returns the sum of the digits of a given number `n`
// **Example:**
// Input: `n = 123`
// Output: `6`

function sum(num)
{
    if(num<10)
    {
        return num;
    }
    return num%10+Math.floor(sum(num/10));
}
let num=123
console.log(sum(num));
