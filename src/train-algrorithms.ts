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

// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(nums: number[]): number {
//   const n = nums.length;
//   let expectedSum = 0;
//   let actualSum = 0;

//   for (let i = 0; i <= n; i++) {
//     expectedSum += i;
//   }

//   nums.forEach((num) => {
//     actualSum += num;
//   });

//   // Yo'qolgan sonni qaytarish
//   return expectedSum - actualSum;
// }

// // Masalan:
// console.log(missingNumber([5, 3, 2, 1, 0]));

// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.

// function mergeSortedArrays(arr1: number[], arr2: number[]) {
//   let resultArr = arr1.concat(arr2);
//   let newResARr: number[] = [];
//   for (let index = 0; index < resultArr.length; index++) {
//     // console.log(resultArr[index]);
//     if (resultArr[index] < resultArr[index + 1]) {
//       console.log(resultArr[index ]);

//       // newResARr.push(resultArr[index]);
//     }
//   }
//   console.log(newResARr);
// }

// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

// U-TASK:

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// function sumOdds(number:number) {
//   let count = 0;
//   for (let i = 1; i <= number; i++) {
//       if (i % 2 !== 0) { // Toq sonni aniqlash
//           count++;
//       }
//   }
//   return count;
// }

// console.log(sumOdds(9));  // Natija: 5
// console.log(sumOdds(11)); // Natija: 6

// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.

// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.

// function countChars(word: any) {
//   const result: any = {};

//   for (const char of word) {
//     result[char] = (result[char] || 0) + 1;
//   }

//   return result;
// }

// console.log(countChars("hello")); // {h: 1, e: 1, l: 2, o: 1}
// console.log(countChars("javascript")); // {j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1}

// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

// function chunkArray(numbers: number[], splitter: number) {
//   const result: number[][] = [];
//   let newArr: number[] = [];
//   for (let index = 0; index < numbers.length; index += splitter) {
//     const chunk = numbers.slice(index, index + splitter);
//     result.push(chunk);
//   }
//   console.log(result);
// }
// chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

// X-TASK:

//  Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
//  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// function countOccurrences(obj: object, str: string) {
//   let count = 0;

//   function recursiveCount(currentObj: any): void {
//     // Obyektning barcha kalitlarini olish
//     for (let key of Object.keys(currentObj)) {
//       if (key === str) {
//         count++;
//       }
//       if (typeof currentObj[key] === "object" && currentObj[key] !== null) {
//         recursiveCount(currentObj[key]);
//       }
//     }
//   }
//   recursiveCount(obj);
//   console.log(count);
// }

// countOccurrences(
//   { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
//   "model"
// );

// Y-TASK:

//  Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// function findIntersection(arr1:any[], arr2:any[]) {
//   return arr1.filter(value => arr2.includes(value));
// }

// // Test
// console.log(findIntersection([1, 2, 3], [3, 2, 0])); // [2, 3]

// TASK Z

// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.

// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;

// function sumEvens(arr: number[]) {
//   let result = 0;
//   for (let index = 0; index < arr.length; index++) {
//     let element = arr[index];

//     if (element % 2 == 0) {
//       result += element;
//     }
//   }
//   console.log(result);
//   return result;
// }
// sumEvens([1, 2, 3, 2,8,10]);

// ZA-TASK:

// Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin.
// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

// function sortByAge(arr: any[]) {
//   return arr.sort((a, b) => a.age - b.age);
// }

// console.log(sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]));

// ZC-TASK:

// Shunday function yozing, uni number parametri bolsin va function qabul parametrni selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
// MASALAN: celsiusToFahrenheit(0) return 32

// function celsiusToFahrenheit(givenNumber: number) {
//   let f = (9 / 5) * givenNumber + 32;

//   return f;
// }
// console.log(celsiusToFahrenheit(19));

// ZD-TASK:

// Shunday function yozing, uni number, array va number parametrlari bolsin va berilgan 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi raqam bilan almashtirib yangilangan arrayni qaytarsin
// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]

// function changeNumberInArray(number1: number, massiv: any[], number2: number) {
//   let result = [];
//   for (let index = 0; index < massiv.length; index++) {
//     if(index == number1){
//       massiv[number1] = number2;
//       result = massiv
//     }
//   }
//   return result;
// }
// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));

// ZE-TASK:

// Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'

// function removeDuplicate(word: string) {
//   let result = "";

//   for (let i = 0; i < word.length; i++) {
//     if (!result.includes(word[i])) {
//       result += word[i];
//     }
//   }

//   return result;
// }

// console.log(removeDuplicate("stringg")); // Output: "string"

// ZF-TASK:

// Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
// MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'

// function capitalizeWords(str: string) {
//   return str
//     .split(" ")
//     .map((word) =>
//       word.length > 2 ? word.charAt(0).toUpperCase() + word.slice(1) : word
//     )
//     .join(" ");
// }

// console.log(capitalizeWords("name should be a string"));

// ZG-TASK:

// Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin.
// MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'

// function snakezeWords(str: string) {
//   return str.split(" ").join("_");
// }

// console.log(snakezeWords("name should be a string"));

// ZH-TASK:

// Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin.
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]

// function findDisappearedNumbers(arr: number[]) {
//   let result = [];
//   let lastNumber = arr[arr.length - 1];
//   //   console.log("lastNumber", lastNumber);
//   for (let index = 0; index <= lastNumber; index++) {
//     // console.log(index);

//     if (!arr.includes(index) && index > 0) {
//       result.push(index);
//     }
//   }
//   return result;
// }
// console.log(findDisappearedNumbers([1, 3, 4, 7]));

// ZI-TASK:

// Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
// MASALAN: delayHelloWorld("Hello World") return "Hello World"

// function delayHelloWorld(word: string) {
//   let count = 3;
//   const interval = setInterval(() => {
//     console.log(count);
//     count--;
//     if (count === 0) {
//       clearInterval(interval);
//       setTimeout(() => {
//         console.log(word);
//       }, 1000);
//     }
//   }, 1000);
// }

// delayHelloWorld("Hello world");

// TASK ZJ:

// Shunday function yozing, u berilgan array ichidagi
// raqamlarni qiymatini hisoblab qaytarsin.

// MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;

// Yuqoridagi misolda, array nested bo'lgan holdatda ham,
// bizning function ularning yig'indisini hisoblab qaytarmoqda.

// function reduceNestedArray(arr: any[]) {
//   let result: number = 0;
//   function calculate(newArr: any) {
//     for (let index = 0; index < newArr.length; index++) {
//       const element = newArr[index];
//       if (typeof element == "number") {
//         result += element;
//       } else {
//         calculate(element);
//       }
//     }
//   }
//   calculate(arr);
//   console.log(result);
// }
// reduceNestedArray([1, [1, 2, [4]]]);

// ZK-TASK:

// Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

// function printNumbers() {
//   let finishTime = 5;
//   let count = 0;
//   const interval = setInterval(() => {
//     count++;
//     console.log(count, "second");

//     if (count === finishTime) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// printNumbers();

// ZL-TASK:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab
// function stringToKebab(word: string) {
//   return word.toLowerCase().split(" ").join("-");
// }
// console.log(stringToKebab("I love Kebab"));

// TASK ZM:

// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
// o'girib (reverse) qilib qaytarmoqda.

// function reverseInteger(num: number) {
//   const reversedNum = num.toString().split("").reverse().join("");

//   return reversedNum;
// }

// console.log(reverseInteger(123456789));

// ZN-TASK:

// Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

// function rotateArray(arr: number[], numIndex: number): number[] {
//   let result: number[] = [];
//   for (let i = numIndex + 1; i < arr.length; i++) {
//     result.push(arr[i]);
//   }
//   for (let i = 0; i <= numIndex; i++) {
//     result.push(arr[i]);
//   }

//   return result;
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));

// ZO-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

// function areParenthesesBalanced(str: string): boolean {
//   let balance = 0;
//   console.log(str);
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(") {
//       balance++;
//     } else if (str[i] === ")") {
//       balance--;
//     }
//     if (balance < 0) {
//       return false;
//     }
//   }

//   return balance === 0;
// }

// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda"));

// Shunday function yozing, u 2 ta array parametr qabul qilsin.
// Siz bu ikki arrayning qiymatlari o'xshash bo'lishini
// (ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

// MASALAN:
// areArraysEqual([1, 2, 3], [3, 1, 2]) // true
// areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
// areArraysEqual([1, 2, 3], [4, 1, 2]) // false

// function areArraysEqual(arr1: number[], arr2: number[]) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   const sortedArr1 = arr1.sort();
//   const sortedArr2 = arr2.sort();

//   for (let i = 0; i < sortedArr1.length; i++) {
//     if (sortedArr1[i] !== sortedArr2[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(areArraysEqual([1, 2, 3], [3, 1, 2])); // true

// ZQ-TASK:

// Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]

// @MITASK

// function findDuplicates(arr: number[]): number[] {
//   let counts: { [key: number]: number } = {};
//   let result: number[] = [];

//   for (let num of arr) {
//     counts[num] = (counts[num] || 0) + 1;

//     console.log( counts[num]);
//   }

//   for (let key in counts) {
//     if (counts[key] > 1) {
//       result.push(Number(key));
//     }
//   }
//   return result;
// }

// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4])); // [3, 4]

// ZR-TASK:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

// function countNumberAndLetters(str: string) {
//   let numberCount = 0;
//   let letterCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     const currentChar = str[i];

//     if (currentChar >= "0" && currentChar <= "9") {
//       numberCount++;
//     } else if (
//       (currentChar >= "a" && currentChar <= "z") ||
//       (currentChar >= "A" && currentChar <= "Z")
//     ) {
//       letterCount++;
//     }
//   }

//   return { number: numberCount, letter: letterCount };
// }

// // Misol:
// console.log(countNumberAndLetters("string152%\\¥")); // { number: 3, letter: 6 }

// ZS-TASK:

// Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin.
// MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4

// @MITASK

// function singleNumber(nums: number[]): number {
//   let result = 0;
//   for (let num of nums) {
//     result ^= num; 
//   }
//   return result;
// }

// console.log(singleNumber([4, 2, 1, 2, 1]));

// ZT-TASK:

// Shunday function yozing, u parametridagi string ichida 1 martadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
// MASALAN: firstUniqueCharIndex(“stamp”) return 0

// @MITASK

// function firstUniqueCharIndex(str:string) {
//   for (let i = 0; i < str.length; i++) {
//       const harf = str[i];
//       if (str.indexOf(harf) === str.lastIndexOf(harf)) {
//           return i;
//       }
//   }
//   return -1; 
// }

// console.log(firstUniqueCharIndex("“stamp”")); 


// ZU-TASK:

// Shunday function yozing, u parametridagi array ichida takrorlanmagan raqamlar yig'indisini qaytarsin.
// MASALAN: sumOfUnique([1,2,3,2]) return 4

// @MITASK

function sumOfUnique(nums: number[]): number {
  const count: { [key: number]: number } = {};

  // Har bir elementni sanash
  for (const num of nums) {
      count[num] = (count[num] || 0) + 1;
  }

  // Takrorlanmagan raqamlarning yig'indisini hisoblash
  let sum = 0;
  for (const num in count) {
      if (count[num] === 1) {
          sum += Number(num);
      }
  }

  return sum;
}

// Misol
console.log(sumOfUnique([1, 2, 3, 2]));  // Natija: 4
