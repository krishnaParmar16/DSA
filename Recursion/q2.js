// Calculate Factorial

function add(n)
{
    if(n==0)
    {
        return 1;
    }

    return n * add(n-1)
}

console.log(add(5));
