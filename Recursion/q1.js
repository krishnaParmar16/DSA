// Calculate the Sum of N Natural Numbers
function add(n)
{
    if(n==0)
    {
        return 0;
    }

    return n+add(n-1)
}

console.log(add(5));
