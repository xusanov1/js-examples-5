"use strict";

// function User(name, lastName, age) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
//     this.userData = function () {
//         console.log(`
//         Ism: ${this.name} 
//         Familya: ${this.lastName}
//         Yosh: ${this.age}`);
//     }
// }

// let ism = prompt("Please enter your name: ");
// let familiya = prompt("Please enter your last name: ");
// let yosh = prompt("Please enter your age: ");

// let user = new User(ism, familiya, yosh);
// user.userData()






// function Number(a,b,c){
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     this.findMax = function(){
//         let max = Math.max(this.a, this.b, this.c);
//         console.log(max);
//     }      
// }

// let num = new Number(5,5,5);
// num.findMax();




// function Word(word,letter){
//     this.word = word;
//     this.letter = letter;
//     this.findLetterCount = function(){
//         let count = 0;
//         for(let i = 0; i < this.word.length; i++){
//             if(this.word[i] == this.letter){
//                 count++;
//             }
//         }
//         console.log(count);
      
//     }
// }

// let word = prompt("Please enter your word: ");
// let letter = prompt("Please enter your letter: ");  
// let result = new Word(word,letter);
// result.findLetterCount();





// function MyList(mylist){
//     this.mylist = mylist
//     this.listSum = function(){
//         let sum = 0;
//         for(let i = 0; i < this.mylist.length; i++){
//             sum += this.mylist[i];
//         }
//         console.log(sum);
//     }                    
// }

// let mylist = [1,2,3,4,5];
// let result = new MyList(mylist);
// result.listSum();




