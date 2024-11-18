let arr=[
    [1,2,3],
    [4 ,5, 6],
    [7,8,9]
]
console.log(arr);


function diagonalDifference(arr) {
    // Write your code here
    let dsum=0;
    let asum=0;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(i==j)
            {
                dsum=dsum+arr[i][j];
            }
        }
    }
    for(let i=0,j=arr.length-1;i<arr.length;i++,j--)
    {
        asum=asum+arr[i][j];
    }
    let ans;
            if(dsum>=asum)
            {
                ans=dsum-asum;
            }
            else if(asum>dsum)
            {
                ans=asum-dsum;
            }
    
    // console.log(asum,dsum,ans);
    return ans;
    
}

console.log((diagonalDifference(arr)));