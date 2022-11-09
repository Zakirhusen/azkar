// Question Name: Peaceful children

// Problem Statement

// Consider N children standing in a line. The ith child in the line has a toy with goodness Gi.

// Child i and Child j are considered enemies of each other if Gi+Gj is a power of 2.

// Peaceful children are the ones who do not have any enemies.

// Given an array G of length N, print the number of peaceful children standing in the line.

// Input Format

// First line of input contains a single integer denoting N.
// Next line contains N space-separated integers denoting the goodness of the toys.
// Output Format

// Print the number of peaceful children standing in the line.
// Constraints

// 1<=N<=10^5
// 1<=Gi<=10^9
// Sample Input 1

// 5

// 5 1 2 4 3

// Sample Output 1

// 2

// Explanation of Sample 1

// Enemies of child 1 are: child 5

// Enemies of child 2 are: child 5

// Enemies of child 3 are: no enemies

// Enemies of child 4 are: no enemies

// Enemies of child 5 are: child 1, child 2

// Hence peaceful children are: child 3 and child 4

 
function check2power(arr){
let peaceKids=0
if (arr.length==1) return 1
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        console.log(arr[i],arr[j]);
        if((parseInt(Math.ceil((Math.log(arr[i]+arr[j])/Math.log(2)))))==(parseInt(Math.floor((Math.log(arr[i]+arr[j])/Math.log(2)))))){
            peaceKids++
        }
    }    
}
    
    return peaceKids
}
 let res=check2power([5])
 console.log('res',res);


//  Problem Statement

// You are given an array A of length N. You need to partition the array into continuous blocks such that :

// the Bitwise XOR of elements of each block is greater than 0.
// The Product of the number of blocks and maximum of the sizes of all blocks is minimized.
// Like say the array was : [0,1,1,0,1].

// Then we can Partition it into three blocks as : (1,2), (2,3), (4,4) (these represent the start and end of each block) = [0,1], [1,0], [1].

// Here the Bitwise XOR of elements of each block is = 1(greater than 0),

// number of blocks = 3,

// maximum of the sizes of all blocks = maximum(2,2,1) = 2

// Input Format

// First-line contains a single integer N, denoting the length of the array.
// The next line contains N space-separated integers denoting the array elements.
// Output Format

// Print the minimum product of : the number of blocks and the maximum of the sizes of all blocks you can get. If there is no way to partition the array print -1.
// Constraints

// 1<=N<=1000
// Elements of the array are either 0 or 1.
// Sample Input 1

// 5

// 0 1 1 0 0

// Sample Output 1

// 6

// Explanation of Sample 1

// We can partition the array as : (1,2), (3,5)(these represent the start and end of each block) = [0,1], [1,0,0].
            

