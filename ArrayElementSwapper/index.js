// Array that stores items
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function that swaps elements in an array
const elementSwapper = (array, index1, index2) => {
  const holder = array[index1];
  array[index1] = array[index2];
  array[index2] = holder;
  return array;
};

// Calling the function with the array and the indexes of the elements to swap
elementSwapper(array1, 4, 9);
