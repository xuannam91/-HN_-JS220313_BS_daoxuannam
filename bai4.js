//bai 4 : Viết một chương sắp xếp các phần tử trong mảng theo thứ tự giảm dần bằng 2 cách: sử
//dụng và không sử dụng hàm sort 


// Có sử dụng hàm sort
let numbers = [49,38,25,12,3,8,15];
    numbers.sort(function(a, b) {
    return b - a;
    });
    console.log(numbers);


//  không sử dụng hàm sort
let array = [49,38,25,12,3,8,15];
let support = 0;
for (let i = 0; i < array.length; i++) {
  for (let j = i+1; j < array.length; j++) {
    if (array[i] < array[j]) {
              support = array[j];
              array[j] = array[i];
              array[i] = support;
            }
  } 
}console.log(array);