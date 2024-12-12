
let queue=[];
function enqueue(value)
{
    queue.push(value)
}
function dequeue()
{
    return queue.shift()
}
function front()
{
    return queue[0];
}
function rear()
{   
    return queue[queue.length-1]
}

enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
enqueue(50);
console.log(queue);
dequeue();
console.log(queue);
console.log(front());
console.log(rear());





