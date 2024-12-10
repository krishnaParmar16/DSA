// ### Q4: Count Nodes
// Count the total number of nodes in a linked list.
// **Example:**
// ```
// Input:
// 1 2 3 4 5 -1
// Output:
// 5
// ```
function count()
{
    let arr=[1, 2, 3, 4, 5, -1];
    let count=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>=0)
        {
            count++;
        }
    }
    return count;
}
console.log(count());