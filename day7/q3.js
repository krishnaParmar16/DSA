//Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).




let a = [1, 2, 3]
let b = [3, 2, 1]
function compareTriplets(a, b) {
        
    let alice=0;
    let bob=0;

for(let i=0;i<3;i++)
{
   if(a[i]>b[i])
   {
       alice++;
   }
   else if(b[i]>a[i])
   {
       bob++;
   }
}

return [alice,bob]

}

console.log(compareTriplets(a,b));
