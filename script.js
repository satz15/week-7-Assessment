// 1. Write a program that takes two arrays and finds their intersection using Sets.

function findIntersection(arr1,arr2){
const set1 = new Set(arr1);
const set2 = new Set(arr2);
const intersection = [];

for (const value of set1) {
    if (set2.has (value)) {
        intersection.push(value);
    }
}
  return intersection;
}

const arr1 = [1,2,3,4,5];
const arr2 = [3,4,5,6,7];
const result = findIntersection(arr1,arr2);
console.log(result); 

// 2 Write a program that takes an array containing nested arrays and flattens it into a
// single array using the array methods.

// function flattenArray(arr) {
//     return arr.reduce((flatArray, element) => {
//       if (Array.isArray(element)){
//     flatArray.push(...flattenArray(element));
//  }  else {
//     flatArray.push(element);
//  }
//    return flatArray;
//  }, []);
// }
   
//    const arr = [1,[2,3],[4,5,[6,7]]];
//    const flattenedArr = flattenArray(arr);
//    console.log(flattenedArr);

//    3 Write a program that takes an array containing both truthy and falsy values and
//    removes the falsy values using the array methods.

//   const arr = [0, "hello", 42, false, "world", null, true, undefined];
//   const filteredArr = arr.filter(Boolean);
//   console.log(filteredArr);

//   4. Write a program that takes an array of numbers and returns an array with only the
// unique elements without using the array methods.

// function getuniqueElements(arr) {
//   const uniqueArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     const currentElement = arr[i];
//     if (!uniqueArr.includes(currentElement)) {
//         uniqueArr.push(currentElement);
//     }
//   }
//    return uniqueArr;
// }
//    const arr = [1,2,2,3,4,4,5];
//    const uniqueArr = getuniqueElements(arr);
//    console.log(uniqueArr);

//    6 Write a program that takes an object and checks if a specific property exists

 const obj = { name:'satz', age:25, city:'coimbatore'}
 const propertyName = 'age';
 
 if (obj.hasOwnProperty(propertyName)) {
    console.log('property "${propertyname}" exists:true');
 } else  {
    console.log('property "${propertyname}" exists:false');
 }
 
//  7. Write a program that takes an object containing some properties with undefined
//  values and removes those properties

const object = { name:'satz', age:undefined, city:'coimbatore' }
 for (const key in object) {
    if (object[key] === undefined) {
        delete object[key];
    }
 }
   console.log(object);

//    8. Write a program that takes an array containing nested arrays and destructures specific
// elements from the nested arrays.

  const arr = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];

  for (const nestedArray of arr) {
  const [first] = nestedArray;
  console.log(`First Element of Nested Array: ${first}`);
}

// 9. Write a program that takes an object and extracts properties with renamed variables
// using destructuring assignment.

  const user = { name:"satz", age:23 };
  const { name: userName, age: userAge } = user;

  console.log(`User Name: ${userName}`);
  console.log(`User Age: ${userAge}`);

//   10. Write a program that takes a function with an object parameter and provides default
//   values for missing properties using destructuring assignment.

  function displayInfo({ name = 'Anonymous', age = 23 }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
  }

  const name = {name:'satz'};
  displayInfo(name);
