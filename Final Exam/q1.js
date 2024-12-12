// Implement a stack using two queues. Use only shift and push operations, and simulate stack operations like push, pop, and top.

function queue()
{
    let Queue1=[];
    let Queue2=[];

    function push(value)
    {
        Queue2.push(value);

        while(Queue1.length>0)
        {
            Queue2.push(Queue1.shift())
        }

        [Queue1,Queue2]=[Queue2,Queue1]
    }

    function pop()
    {
        return Queue1.shift();
    }
    
    push(10);
    push(20);
    push(30);
    push(40);
    push(50);

    // console.log(pop());
    return pop();
}
console.log(queue());
