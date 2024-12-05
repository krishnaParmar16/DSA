// // Write a function findUnion(arr1, arr2) that returns the union of two arrays (all unique elements).
// // Example findUnion([1, 2, 3], [3, 4, 5]); 
// // Output: [1, 2, 3, 4, 5]

// function findUnion(arr1, arr2)
// {
//     let mySet=new Set(arr1);
//     let newarr=[];

//     for(let value of arr2)
//     {
//         mySet.add(value);
//     }
//     newarr.push(mySet)
//     return newarr;

// }
// let arr1=[1,2,3];
// let arr2=[3,4,5];
// console.log(findUnion(arr1,arr2));

    function findUnion(arr1, arr2)
    {
        const mySet= new Set();
        let newArr=[];
        for(let value of arr1)
        {   
            mySet.add(value);
            newArr.push(value);
        }
        for(let value of arr2)
        {
            if(!mySet.has(value))
            {
                mySet.add(value);
                newArr.push(value);
            }
        }
        return newArr ;
    }

    let arr1=[1,2,3];
    let arr2=[3,4,5];
    console.log(findUnion(arr1,arr2));
