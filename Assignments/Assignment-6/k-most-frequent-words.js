// Not a perfect solution yet
// Javascript Code
// Time Complexity: O(NlogN)
// Space Complexity: O(N)

const topKFrequent = (words, k) => {
  const mappings = {};

  // Preparing an object with each word and its occurrence count (just like a hashmap)
  for (let i = 0; i < words.length; i++) {
    mappings[words[i]] = mappings[words[i]] + 1 || 1;
  }

  /* Object.keys(mappings) returns the list of keys (unique words) as an array
    And that array is being sorted using the custom comparator
    if the count of two words is equal, we sort them alphabetically (a > b ? 1 : -1)
    if not sort them based on their count (mappings[b] - mappings[a]) */

  const sorted = Object.keys(mappings).sort((a, b) => {
    if (mappings[b] === mappings[a]) {
      return a > b ? 1 : -1;
    }
    return mappings[b] - mappings[a];
  });
  return sorted.slice(0, k).sort();
};

// Driver Code
let words = ["priya", "bhatia", "akshay", "arpit", "priya", "arpit"];
let k = 3;
console.log(topKFrequent(words, k));

// Output:
// [ 'akshay', 'arpit', 'priya' ]
