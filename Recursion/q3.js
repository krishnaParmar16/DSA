// Print Numbers from 1 to N

function a(n)
{
    if(n==0)
    {
        return;
    }

    a(n-1)
    console.log(n);
    
}
a(10)