// Removing the duplicate element from the array.

const removeDuplicates = (arr) => {
    const uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
  
      // Check if the value already exists in the uniqueArray
      for (let j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
          isDuplicate = true;
          break;
        }
      }
      
      // If it's not a duplicate, add it to uniqueArray
      if (!isDuplicate) {
        uniqueArray.push(arr[i]);
      }
    }
    
    return uniqueArray;
  }
  
  const arr = [1, 2, 3, 2, 4, 1,6,6,7,7, 5];
  console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]
  