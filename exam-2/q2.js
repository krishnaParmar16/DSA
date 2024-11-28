// Section B: 2D Array Operations

// 2. Initializing a 2D Array
//    Write a function to initialize a 3x3 2D array with random integer values between 1 and 100.
//    Input: No input (values are generated randomly)
//    Output: A 3x3 matrix of random values


function initialize()
{
    let arr=[];

    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            arr.push(Math.round(Math.random()*100))
        }
    }

    return arr;
}

console.log(initialize());
