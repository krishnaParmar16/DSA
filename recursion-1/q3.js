// 3. Print Numbers from 1 to N

function print(n)
{
    if(n==0)
    {
        return;
    }
    print(n-1);
    console.log(n);
}

print(10);
