// ### Q5: Search Element
// Find if a target element exists in a sorted array.
// **Example:**
// ```
// Input:
// 6
// 1 2 3 4 5 6
// 4
// Output:
// true

function search()
{
    let arr=[1 ,2 ,3 ,4 ,5 ,6]
    let target=4;

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==target)
        {
            return true;
        }
    }
    return false;
}
console.log(search());