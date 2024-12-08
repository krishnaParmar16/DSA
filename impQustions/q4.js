// Given a sorted array, return a sorted array of their squares.
function squares()
{
    let arr=[1,2,3,4,5];
    let square=[];
    for(let i=0;i<arr.length;i++)
    {
        square.push(arr[i]*arr[i])
    }
    return square;
}
console.log(squares());