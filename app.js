
//Function #1:Array Slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFood = foods.slice(1,4);
console.log(modifiedFood);

//Function #2: Array Splice

const modifyFoods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
modifyFoods.splice(2,0,"noodles","icecream");
console.log(modifyFoods);

//Function #3: Filter

const numberArray = [12,324,213,4,2,3,45,4234];
let evenArr = numberArray.filter(isEven =(number)=> number%2 === 0)
console.log(evenArr);

//Function #4: Reject
 let nonPrimeArr = numberArray.filter(nonPrime = (number) =>{
     for(let i = 2;i<=Math.sqrt(number);i++){
         if(number%i == 0){
             return number;
         }
     }
 })
 console.log(nonPrimeArr);

 //Function #5: Lambda

 let evenArr2 = numberArray.filter((number)=> number%2 === 0)
console.log(evenArr2);

//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
const sqrArr = myArray.map(findSquareOfNumbers=(number)=> number*number);
console.log(sqrArr);

//Function #7: Reduce

const myArr = [2, 3, 5, 10];
const mul = myArr.reduce((acc,curr)=>acc*curr);
console.log(mul);
