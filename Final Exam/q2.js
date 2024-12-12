// Write a function to reverse a queue using a stack. Provide a step-by-step explanation of how the reversal works.
function reverse()
{
    let queue=[];

    function enqueue(q,value)
    {
        q.push(value);
    }
    function dequeue()
    {
        return queue.shift()
    }

    function reverseQueue()
    {
        let stack=[];
        let ansQueue=[];
        while(queue.length>0)
        {
            let value=dequeue()
            stack.push(value);
        }
        while(stack.length>0)
        {
            enqueue(ansQueue,stack.pop());
        }

        return ansQueue;
    }



    enqueue(queue,10);
    enqueue(queue,20);
    enqueue(queue,30);
    enqueue(queue,40);
    enqueue(queue,50);

    return reverseQueue();

}
console.log(reverse());