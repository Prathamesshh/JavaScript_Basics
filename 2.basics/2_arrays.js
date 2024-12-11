const marvelheros = ['thor' , 'spidy', 'ironman']

const dcheros = ['batman', 'flash']
const all_heros = marvelheros.concat(dcheros)
console.log(all_heros);
// concatinating is uesd to join 2 or more arrys into a new array


const another_array = [1,2,3,[4,5,6],7,[8,9,[4,5]]]
const other_array = another_array.flat(Infinity)
console.log(other_array);
//flat : Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 
console.log(Array.isArray("yash"));
console.log(Array.from("yash"));
console.log(Array.from({name : "hitesh"})); // interesting
// from : Creates an array from an iterable object.

let score1 = 100
let score2 = 200

console.log(Array.of(score1,score2));
// of : Returns a new array from a set of elements.


