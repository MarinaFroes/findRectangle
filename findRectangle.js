const image1 = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 1]
];

const image2 = [
  [0]
];

const image3 = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 1, 1],
  [1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1]
];

// Find the coordinates of the rectangle made of 0's
const findRectangle = image => {
  let topLeft;
  let bottomRight;

  for(let i = 0; i < image.length; i++){

    if(image[i].indexOf(0) >= 0){
        (topLeft === undefined) && (topLeft = [i, image[i].indexOf(0)]);
        bottomRight = [i, image[i].lastIndexOf(0)];
      }
    }

  return `${topLeft} ${bottomRight}`;
}

console.log(findRectangle(image1)); // 1,2 3,4
console.log(findRectangle(image2)); // 0,0 0,0
console.log(findRectangle(image3)); // 1,2 2,3
