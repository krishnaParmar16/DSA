// reverse the queue using stack
let queue=[]
function enqueue(q,value)
{   
    q.push(value);
}
function dequeue()
{
    return queue.shift();
}
function front()
{
    return queue[0];
}
function rear()
{
    return queue[queue.length-1] 
}

enqueue(queue,10);
enqueue(queue,20);
enqueue(queue,30);
enqueue(queue,40);
enqueue(queue,50);

function reverse(queue)
{
    let stack=[];
    let ansQueue=[];

    while(queue.length>0)
    {
        let value=dequeue()
        stack.push(value);
    }
    // console.log(stack);
    while(stack.length>0)
    {
        enqueue(ansQueue,stack.pop());
    }

    return ansQueue;

}
console.log(reverse(queue))