console.log("TRAIN Area !");

// A-TASK:

// Create a function with 2 parameters that returns the number of times the first parameter's letter appears in the second parameter's word.
// EXAMPLE: countLetter("e", "engineer") returns 3.

// =============

// let count = 0;
// function countLetter(letter, word) {
//   if (letter) {
//     for (char of word) {
//       if (char == letter) {
//         count++;
//       }
//     }
//     console.log(count);
//     return count;
//   } else {
//     console.log("Put a letter");
//   }
// }

// countLetter("g", "engineer");

// B-TASK

// Create a function with 1 string parameter that returns the count of digits in that string.
// EXAMPLE: countDigits("ad2a54y79wet0sfgb9") returns 7.

// let counterNumber = 0;
// function numberReturner(word) {
//   let newArr = [...word]
//   newArr.filter((item) => {
//     if(!isNaN(item)){
//       counterNumber ++;

//     }

//   })
//   console.log(counterNumber)
// }
// numberReturner("111dddenjsdjnasjnda5757676");

// C-TASK

// Create a function with 2 string parameters that returns true if both strings contain the same letters, otherwise false.
// EXAMPLE: checkContent("mitgroup", "gmtiprou") returns true.

// function checkContent(word1, word2) {
//   let newWord1 = [...word1];
//   let newWord2 = [...word2];

//   if (newWord1.length == newWord2.length) {
//     let newArr = word1.concat(word2);
//     // console.log(newArr)

//     if (newWord1.some((char) => newWord2.includes(char))) {
//       console.log("true")
//       return true
//     } else {
//       console.log("false")
//       return false
//     }
//     // for (let index = 0; index < newArr.length; index++) {
//     //   const element = newArr[index];
//     //   if (element == element) {
//     //     return true;
//     //   } else {
//     //     return false;
//     //   }
//     // }
//   }
// }

// checkContent("mitgroup", "gmtiprou");

// D-TASK:

// Create a class named Shop, and pass 3 types of products to its constructor, and the class should have 3 methods: one for stock, one for selling, and one for receiving. Each method should also log when it is executed. For example: const shop = new Shop(4, 5, 2); shop.stock() should return "Currently at 20:40, there are 4 breads, 5 lagmans, and 2 colas!" shop.sell('bread', 3) & shop.receive('cola', 4) & shop.stock() should return "Currently at 20:50, there is 1 bread, 5 lagmans, and 6 colas!

// class Shop {
//   constructor(bread, lagman, cola) {
//     this.products = {
//       bread: bread,
//       lagman: lagman,
//       cola: cola,
//     };
//   }

//   stock() {
//     const currentTime = new Date().toLocaleTimeString();
//     const { bread, lagman, cola } = this.products;
//     console.log(
//       `Currently at ${currentTime}, there are ${bread} breads, ${lagman} lagmans, and ${cola} colas!`
//     );
//     return this.products;
//   }

//   sell(product, quantity) {
//     const currentTime = new Date().toLocaleTimeString();

//     if (this.products[product] === undefined) {
//       console.log(`This product does not exist: ${product}`);
//       return;
//     }

//     if (this.products[product] < quantity) {
//       console.log(
//         `Currently at ${currentTime}, there isn't enough ${product}, only ${this.products[product]} available.`
//       );
//       return;
//     }

//     this.products[product] -= quantity;
//     console.log(
//       `Currently at ${currentTime}, ${quantity} ${product} sold. Now, there are ${this.products[product]} left.`
//     );
//   }

//   receive(product, quantity) {
//     const currentTime = new Date().toLocaleTimeString();

//     if (this.products[product] === undefined) {
//       console.log(`This product does not exist: ${product}`);
//       return;
//     }

//     this.products[product] += quantity;
//     console.log(
//       `Currently at ${currentTime}, ${quantity} ${product} received. Now, there are ${this.products[product]} left.`
//     );
//   }
// }

// const shop = new Shop(4, 5, 2);

// shop.stock();
// shop.sell("bread", 3);
// shop.receive("cola", 4);
// shop.stock();

// E-TASK:

// Create a function that takes a single string argument and returns the reversed version of the string.
// EXAMPLE: getReverse("hello") returns "olleh".

// function getReverse(word) {
//   let reversedWord = "";
//   for (let i = 0; i < word.length; i++) {
//     reversedWord = word[i] + reversedWord;
//   }
//   console.log(reversedWord);
// }

// getReverse("ssdd");

// F-TASK:

// Create a function called findDoublers that takes a single string argument and returns true if the string contains duplicate letters, otherwise false.
// EXAMPLE: findDoublers("hello") returns true.

// function findDoublers(str) {
//   const charCount = [];

//   for (let char of str) {
//     if (charCount[char]) {

//       return true;
//     } else {

//       // Belgini birinchi marta uchratganimizda hisoblash
//       charCount[char] = 1;
//     }
//   }

//   return false;
// }
// console.log(findDoublers("hello"));
// console.log(findDoublers("sa"));

// G-TASK:

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// function getHighestIndex(numbers) {
//   numbers.forEach((element, index) => {
//     if (element == Math.max(...numbers)) {
//       console.log(element + ":" + index);
//     }
//   });
// }
// getHighestIndex([5, 21, 33, 3, 54]);

// TASK H:

// Raqamlardan iborat arrayni argument sifatida qabul qiladigan
// function tuzing. Ushbu function faqatgina positive sonlarni olib
// string holatida return qilsin.
// MASALAN: getPositive([1, -4, 2]) return qiladi "12".

// function getPositive(arr: number[]) {
//   let result: string = "";
//   let newArr: number[] = [];
//   for (let index: number = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element > 0) {
//       result += `${element}`;
//       // console.log(result);
//     }
//   }
//   console.log("Result:",result);
// }
// getPositive([2, 1, -4, 2, 3]);

// H2-TASK:

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

// function getDigits(word: string) {
//   let result: string = "";
//   for (let char of word) {
//     if (Number(char)) {
//       result += char;
//     }
//   }

//   return result;
// }
// console.log(getDigits("m14i1t"));

// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

// function majorityElement(nums: number[]): number {
//   let maxCount = 0;
//   let repeatedElement = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;

//     // Har bir element uchun arrayni boshqatdan ko'rib chiqamiz
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }

//     // Agar hozirgi elementning takrorlanishi eng ko'p bo'lsa, yangilaymiz
//     if (count > maxCount) {
//       maxCount = count;
//       repeatedElement = nums[i];
//     }
//   }

//   return repeatedElement;
// }

// // Test
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // N

// function findLongestWord(sentence: string): string {

//   const words = sentence.split(" ");

//   let longestWord = "";

//   for (const word of words) {
//
//       if (word.length > longestWord.length) {

//           longestWord = word;
//       }
//   }

//   return longestWord;
// }

// const result = findLongestWord("I come from Uzbekistan");
// console.log(result);

// K-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(word: string) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;
//   for (const element of word) {
//     // for (let index = 0; index < word.length; index++) {
//     //   const element = word[index];

//     // }
//     for (const char of vowels) {
//       if (element == char) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(countVowels("string"))

// L-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding") return "ew ekil gnidoc";

// function reverseSentence(word: string): string {
//   let returnedSentence = "";
//   let result = "";

//   const words = word.split(" ");

//   for (let singleWord of words) {
//     returnedSentence = "";

//     for (let char of singleWord) {
//       returnedSentence = char + returnedSentence;
//     }

//     result += returnedSentence + " ";

//   }

//   return result;
// }

// // Test qilish
// console.log(reverseSentence("we like coding")); // "ew ekil gnidoc"

// M-TASK:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(numbers: any[]) {
//   let resultArr: any[] = [];
//   numbers.forEach(function (element, index) {
//     let square = element * element;
//     resultArr.push({ number: element, square: square });
//   });
//   return resultArr;
// }
// console.log(getSquareNumbers([1, 2, 3]));

// N-TASK:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(word: string): boolean {
//     let reversedWord = "";

//     for (let i = word.length - 1; i >= 0; i--) {
//       reversedWord += word[i];
//     }

//     console.log(`Original word: ${word}`);
//     console.log(`Reversed word: ${reversedWord}`);

//     return word === reversedWord;
//   }

//   console.log(palindromCheck("son")); // false
//   console.log(palindromCheck("racecar")); // true

// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(numbers: any[]) {
//   let result = 0;

//   for (let index = 0; index < numbers.length; index++) {
//     let element = numbers[index];

//     if (typeof element == "number") {
//       result += element;
//     }
//   }

//   console.log(result);
// }
// calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);

// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(objectBox: any) {
//   let obj = Object.entries(objectBox);
//   let result: any = [];
//   obj.map((value, index) => {
//     result.push(value);
//   });
//   return result;
// }

// console.log(objectToArray({ a: 10, b: 20 }));

// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// function hasProperty(objectBox: object, prop: string) {
//   let obj = Object.keys(objectBox);
//   if (obj.includes(prop)) {
//     console.log("true");
//     return true;
//   } else {
//     console.log("false");
//     return false;
//   }
// }
// hasProperty({ name: "BMW", model: "M3" }, "name");

// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

// function calculate(stringNumbers: string) {
//   let numbers = [...stringNumbers];
//   let result = 0;

//   numbers.forEach(function (number) {
//     if (Number(number)) {
//       result += Number(number);
//     }
//   });
//   console.log(result);
// }
// calculate("1+2+4");

function missingNumber(nums: number[]): number {
  const n = nums.length;
  let expectedSum = 0;
  let actualSum = 0;

  for (let i = 0; i <= n; i++) {
    expectedSum += i;
  }

  nums.forEach((num) => {
    actualSum += num;
  });

  // Yo'qolgan sonni qaytarish
  return expectedSum - actualSum;
}

// Masalan:
console.log(missingNumber([5, 3, 2, 1, 0]));
