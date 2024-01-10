/* 

Question - 8
Aladdin and his Carpet

Aladdin wants to travel around the world and will choose a circular
path to fly on his magical carpet. The carpet needs enough magic to
take him from one place to another. He knows that after traveling
some distance, he can find a magic source that will enable the carpet
to travel a further distance.

There are n magical sources along the circular path numbered from 0
to n-1. Initially, the carpet has no magic and Aladdin can use a portal to
jump to any magical source and start his journey. The carpet consumes
units of magic equal to the units of distance travelled. He needs to
choose a point to start his journey that will allow him to complete his
journey. Determine the lowest index of the starting points from which
Aladdin can start his journey and visit all of the places in the circular
path in order. If there is no solution, return -1.

For example, there are n = 4 sources of magic along his route: magic =
[3, 2, 5, 4] and dist = [2, 3, 4, 2]. The first attempt is starting at the first
source, magic[0] = 3. He transports there without cost and collects 
3 units of magic. The distance to the next point is dist[0] = 2. It takes
2 units of magic to get there and he collects magic[1] = 2 units upon
arrival, so he has 3 - 2 + 2 = 3 units of magic after making his first
carpet ride. Continuing along the journey:
3 - dist[1] + magic[2] = 3 - 3 + 5 = 5
5 - dist[2] + magic[3] = 5 - 4 + 4 = 5
5 - dist[3] = 5 - 2 = 3

At this point, he is back to the first source. Because he can complete
his journey starting at source magic[0], there is no reason to continue
with the analysis so its index, 0, is returned. To illustrate a point from
the same example, if he starts at position 2, where magic[1] = 2 and
dist[1] = 3, he will not be able to proceed to the next point because the
distance is greater than his magic units. Note that the list is circular, so
from magic[3] in this example, the next source on the path is magic[0].

Function Description
Complete the function optimalPointIterative in the editor below. The function
must return an integer that denotes the minimum index of magic from
which he can start a successful journey. If no such starting point exists,
return -1.

optimalPointIterative has the following parameter(s):
  magic[magic[0],...magic[n-1]]: an array of integers where magic[i]
denotes the amount of magic in the i source.
  dist[dist[0],...dist[n-1]]: an array of integers where dist[i] denotes the
distance to the next magical source.

Constraints
1 ≤ n ≤ 100000
0 ≤ magic[i] ≤ 10000
0 ≤ dist[i] ≤ 10000

Input Format For Custom Testing
The first line contains an integer, n, that denotes the number of
elements in magic.

Each line i of the n subsequent lines (where 0 ≤ i < n) contains an
integer that describes magic[i].
The next line again contains the integer, n, that denotes the number
of elements in dist.
Each line i of the n subsequent lines (where 0 ≤ i < n) contains an
integer that describes dist[i].

Sample Case 0
Sample Input For Custom Testing
4
2
4
5
2
4
4
3
1
3
1

Sample Output
1

Explanation
Here magic = [2, 4, 5, 2] and dist = [4, 3, 1, 3]. If Aladdin starts at the
second magical source, his magic levels are:
   magic[1] = 4
   4 - dist[1] + magic[2] = 4 - 3 + 5 = 6
   6 - dist[2] + magic[3] = 6 - 1 + 2 = 7
   7 - dist[3] + magic[0] = 7 - 3 + 2 = 6
   6 - dist[0] = 6 - 4 = 2.
The first point from where Aladdin can start his journey is the 2nd
magical source. The output should be 1, the index of the 2nd
location

Sample Case 1
Sample Input For Custom Testing
4
8
4
1
9
4
10
9
3
5

Sample Output
-1

Explanation
Here magic = [8, 4, 1, 9] and dist = [10, 9, 3, 5]. In each case, the
distance to the next source is greater than the amount of magic at
the current source. 

magic[3] = 9
9 - dist[3] + magic[0] = 9 - 5 + 8 = 12
12 - dist[0] + magic[1] = 12 - 10 + 4 = 6
6 - dist[1] + magic[2] = 6 - 9 + 1 = -2

No matter where Aladdin starts, he will not be
able to finish his travel.

*/



/* 

magic = [3, 2, 5, 4] 
dist = [2, 3, 4, 2]

--- first attempt
start at magic[0] = 3
currentMagic = 3
nextPoint = dist[0] = 2
currentMagic -= nextPoint // 3 - 2
currentMagic += magic[1] // 1 + 2

--- second attempt
nextPoint = dist[1] = 3
currentMagic -= nextPoint // 3 - 3
currentMagic += magic[2] // 0 + 5

--- third attempt
nextPoint = dist[2] = 4
currentMagic -= nextPoint // 5 -4
currentMagic += magic[3] // 1 + 4

--- fourth attempt
nextPoint = dist[3] = 2
currentMagic -= nextPoint = 5 - 2
// back to the first source, he managed to complete his journey starting from index 0, so return 0

--- if he had started from magic[1] = 2
nextPoint = dist[2] = 4
currentMagic -= nextPoint // 2 - 4 ----------- nextPoint > currentMagic, so not able to proceed

*/



// utils

const sumReduce = (a, b) => a + b;



/*
 * iterative solution 
 */

function optimalPointIterative(magic, dist) {

   let totalMagic = magic.reduce(sumReduce, 0);
   let totalDist = dist.reduce(sumReduce, 0);
   if (totalMagic < totalDist) return -1;
   let magicLeft = 0;
   let result = 0;
   for (let i = 0; i < magic.length; i++) {
      if (magicLeft < 0) {
         result = i;
         magicLeft = 0;
      }
      magicLeft += (magic[i] - dist[i]);
   }
   return result;
}



/*
 * recursive solution 
 */

function calculateMagicLeft(magic, dist, i, magicLeft, result) {
   if (i < magic.length) {
      if (magicLeft < 0) {
         result = i;
         magicLeft = 0;
      }
      magicLeft += (magic[i] - dist[i]);
      i++;
      result = calculateMagicLeft(magic, dist, i, magicLeft, result);
   }
   return result;
}

function optimalPointRecursive(magic, dist) {

   let totalMagic = magic.reduce(sumReduce, 0);
   let totalDist = dist.reduce(sumReduce, 0);
   if (totalMagic < totalDist) return -1;
   let result = calculateMagicLeft(magic, dist, 0, 0, 0);
   return result;
}



/**
 * tests
 */

const tests = [
   { magic: [3, 2, 5, 4], dist: [2, 3, 4, 2] },
   { magic: [2, 4, 5, 2], dist: [4, 3, 1, 3] },
   { magic: [8, 4, 1, 9], dist: [10, 9, 3, 5] },
   { magic: [2, 8, 7, 13], dist: [6, 10, 2, 4] }
]

tests.forEach(attempt => {
   console.log(`${(attempt.magic)} - ${attempt.dist}`);
   console.log("- iterative result:", optimalPointIterative(attempt.magic, attempt.dist));
   console.log("- recursive result:", optimalPointRecursive(attempt.magic, attempt.dist));
});