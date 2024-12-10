function isAnagram(str1, str2) {
    // Convert both strings to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    // Check if the length of the strings are different
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Create character frequency maps for both strings
    const charMap1 = {};
    const charMap2 = {};
    
    // Populate character frequency maps for str1
    for (let char of str1) {
        charMap1[char] = (charMap1[char] || 0) + 1;
    }
    
    // Populate character frequency maps for str2
    for (let char of str2) {
        charMap2[char] = (charMap2[char] || 0) + 1;
    }
    
    // Compare character frequency maps
    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
    }
    
    return true;
}

// Example usage:
const word1 = "listen";
const word2 = "silent";
console.log(isAnagram(word1, word2));