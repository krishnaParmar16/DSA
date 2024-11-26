// Find the nth Fibonacci Number

function f(n)
{
    if(n <= 1)
    {
        return n;
    }

    return f(n-1) + f(n-2);
}

console.log(f(10));
