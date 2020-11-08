/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

const getSize = (width, height, depth) => {
  let area = 2 * ((height * width) + (width * depth) + (height * depth));
  let volume = width * height * depth;

  return [area, volume];
}
