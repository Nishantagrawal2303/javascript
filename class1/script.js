
















// let pencilPrice=124;
// let penPrice =251;

// let outPut =`this is the total price : ${pencilPrice + penPrice}" Rupees.`;

// console.log(outPut);


// let a=10;
// let b=20;

// console.log(a++);
// console.log(++a);

// console.log(6==6);

// let percent= 62;

// if(percent<=60){
//   console.log(`your grade is c because your percent is : ${percent} %`);
// }
// if(percent > 61){
//     console.log(`your grade is B because your percent is : ${percent} %`);
// }

// let color = "yellow";

// // trafic light
// if(color == "red"){
//     console.log("stop");
// }
// else if(color=="green"){
//     console.log("go");
// }
// else{
//     (console.log("go slowlly"));
// }


// // popcorn prices

// let size= "d";

// if(size=="XL"){
//     console.log(250);
// }else if(size == "L"){
//     console.log(200);
// }else if(size=="M"){
//     console.log(100);
// }else if(size=="S"){
//     console.log(50);
// }else{(console.log("sorry noting is there of this Size"));
    
// }

// let marks= 33;

// if(marks >33){
//     if(marks>=80){
//         console.log("o");
//     }else if(marks>=60){
//         console.log("A");
//     }else{
//     console.log("pass");
//     }
// }else if(marks<=33){
//     console.log("fail")
// }

// let Str="abcd";

// if(Str[0]=='a' && Str.length>3){
//     console.log("good string");
// }

// // alert("jai baba ki");
// // console.error("sher");

// // let firstName = prompt("enter your name : ");
// // console.log(firstName);

// // Qs1.Create a number variable num with some value . Now , print “good” if the number is divisible by 10 and print “bad” if it is not


// let num=55;

// if(num%10==0){
//     console.log("good");
// }else{
//     console.log("bad");
// }


// // let Name = prompt("enter your name : ");
// // let age= prompt("enter your age : ");

// // alert(Name + " is " +  age+ " years old.");


// let SStr = "aaaaamn";

// if(SStr[0]== " A" || SStr[0]=="a" && SStr.length>5){
//   console.log("golden");
// }else{
//     console.log("not");
// }


// let nuum1 =100;
// let nuum2 =200;
// let nuum3=1000;

// if(nuum1 > nuum2){
//     if(nuum1>nuum3){
//         console.log("nuum1 is greater")
//     }else(console.log("nuum3 is big"))
// }else if(nuum2>nuum3){
//     console.log("number 2 is big");
// }else(console.log("number 3 is big"));

// let num1=32;
// let num2=47852;
// if((num1%10)==(num2%10)){
//     console.log("numbershavethesamelastdigitwhichis",num1%10);
// }else{console.log("numbersdon'thavethesamelastdigit");

// }

// let msg="        hello  "
// msg = msg.trim();
// console.log(msg);

// let String = "nishant agrawal";
// console.log(String.toLowerCase());

// // remove the last characters from string
// let tr="ilovecoding";
// tr = tr.slice(0,-1);
// console.log(tr);

// //replace string

// let Code="ilovecodingg";
// Code = Code.replace("love" ,"do");
// console.log(Code);

// // repeat string

// let fruits= "Mango";
// fruits = fruits.repeat(5).toUpperCase();
// console.log(fruits);

// let MSG="help!";
// MSG = MSG.trim().toUpperCase();
// console.log(MSG);

// let Name="ilovecoding";
// Name = Name.slice(1,4);
// console.log(Name);

// let NName="apnacollege";

// NName=NName.slice(4);
// console.log(NName);


// // arrays 

// let student=["nishant","Ram","ujjwal"];
// console.log(student);

// // for the length of the array 

// console.log(student.length);
// // for the first string

// console.log(student[0]);

// // for the first char of first string
// console.log(student[0][0]);

// // changing the value of an array

// let Animals =["cat " ,"dog","cow"];

// console.log(Animals);

// Animals[0]="lol";
// console.log(Animals);

// // arrays method 

// let cars = ["audi","bmw","farrari"];

// console.log(cars);

// // push = add to end 
// cars.push("toyota");

// console.log(cars);

// // pop = in this the last element got remove and returns it


// console.log(cars.pop());
// console.log(cars);

// let months=["january" , "july" , "march" , "august"];
// console.log(months);

// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");
// console.log(months);


// //  concatination 

// let mnths=["january" , "july" , "march" , "august"];
// let crs = ["audi","bmw","farrari"];


// mnths.concat(crs);
// console.log(mnths.concat(crs));

// // reverse array 

// console.log(mnths.reverse());

// // slice in array : copies a portion of an array  slice(start, end) 
// let mths=["january" , "july" , "march" , "august"];


// console.log(mths.slice(-7));

// let mnth=["january" , "july" , "march" , "august"];

// mnth.splice( 0 , 2 ,"july","june");
// console.log(mnth);


// // Nested arrayss :  arrays inside arrays 

// let nums = [[2,4],[3,6],[4,8]];

// console.log(nums[1][0]);


// loops in js     FOR LOOP 

// for(let i=1 ; i<=5; i++){
 
// console.log(i);  

// }



/*loops printt all odd numbers(1 to 15 )

for(let i=2 ; i<=10; i=i+2){
 
console.log(i);  

}*/

/* print the multiplication table for 5 

for(let i=5 ; i<=100; i=i+5){
 
console.log(i);  

}*/

// nested for loop 

/*for(let i=1;i<=2;i++){
    console.log(`FIrst loop ${i}`);
    for(j=1;j<=2;j++){
        console.log(`second loop ${j}`);
        for(k=1;k<=3;k++){
        console.log(k);
    }
}
}*/

// While loop 

/*let i=1;
while(i<=5){
    console.log(i);
    i++;
}

console.log("code                                      ends here");


let months=["january" , "july" , "march" , "august"];

for(i=months.length-1;i>=0;i--){
    console.log( i , months[i]);
}


console.log("code                                    ends here");

let student = [
    ["aman", 95],
    ["shradha", 94.4],
    ["karan", 100]
];

for (let i = 0; i < student.length; i++) {
    console.log(`Info of student #${i + 1}`);
    for (let j = 0; j < student[i].length; j++) {
        console.log(student[i][j]);
    }
}

console.log("code                                    ends here");


let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder woman", "flash"]
];

for (let i = 0; i < heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`j=${j} ${heroes[i][j]}`);
    }
}
console.log("code                                    ends here");

let fruits = ["mango", "apple", "banana", "orange", "litchi"];

// Loop to print each fruit
for (let fruit of fruits) {
    console.log(fruit);
}

//  Loop to print each character of the string
for (let char of "apnacollege") {
    console.log(char);
}

console.log("code                                    ends here");


// TODO LIST 

/*let Todo=[];

let req =prompt("enter your request ");

while(true){
    if(req=="quit"){
        console.log("you quited");
        break;
    }

if(req=="list"){
    console.log("_________");
    for(i=0;i<Todo.length;i++){
        console.log(i,Todo[i]);
    }
    console.log("_________");
}
else if(req=="add"){
    let task =prompt("enter your tasks ");
    Todo.push(task);
    console.log("task added");
}else if(req=="delete"){
    let idx =prompt("please enter the task index")
    Todo.splice(idx,1);
    console.log("task deleted");
}else{
 console.log("wrong request");
}

req=prompt("please enter your request");

}*/


/*const item = {
    Name:["Surf","laxmi","xyz"],
    Color:"red",
    Price:51 
};

console.log(item);

// get values

item.Color="blue";

item.weight ="2 kg";

console.log(item);


// gusseing the gameeeee

// const max = prompt("Enter the max number");
// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("Guess the number");

// while (true) {
//     if (guess == "quit") {
//         console.log("User quit");
//         break;
//     }

//     if (Number(guess) === random) {
//         console.log("You are right! Congrats!! Random number was", random);
//         break;
//     } else if (guess < random) {
//         guess = prompt("Hint: Your guess was too small. Please try again");
//     } else {
//         guess = prompt("Hint: Your guess was too large. Please try again");
//     }
// }


// // Functions in java script



// function hello(hell){
//     console.log(hell);
// }


// hello("23");

// let greet = "hello"; // global scope

// function changeGreet() {
//     let greet = "namaste"; // function scope
//     console.log(greet);

//     function innerGreet() {
//         console.log(greet); // lexical scope (accesses greet from parent function)
//     }

//     innerGreet();
// }

// console.log(greet); // global scope output
// changeGreet();


// ARROW FUNCTION  => 

// const sum =(a,b)=>{
//     console.log(a+b);
// };

// sum(5,3);

// const cube = (n) =>{
//     return n*n*n;
// };

// console.log(cube(5));

// console.log("Hi there!");



// // SET TIME OUTTT       

// console.log("ansh patil  ")
// setTimeout(() => {
//     console.log("mera bhai he");
// }, 2000);
// setTimeout(() => {
//     console.log("prr ");
// }, 4000);
// setTimeout(() => {
//     console.log("acha  he");
// }, 6000);


// // SET INTERVALLL

// let id = setInterval(() =>{
//     console.log("ram");
// } ,2000  );

// console.log(id);

// let id2 = setInterval(() =>{
//     console.log("krishana");
// } ,3000  );

// console.log(id2);

// // write a function that prints "hello world" 5 times at intervals of2s each 

// let id = setInterval(() => {
//     console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("clear interval ran");
// }, 10000);

// forEach function
 
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
  console.log(num);
});


// //  MAP FUNCTION 

// let NUM= [1,2,3,4];

// let numDouble=NUM.map((el)=>{
//     return el*el;
// })

// console.log(numDouble);

// // FILTER 

// let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11 ,13,15,51,52];

// let ans = nums.filter((el) => {
//   return el % 2 === 0; // even -> true, odd -> false
// });

// console.log(ans); // Output: [2, 4, 8, 2, 10, 12]


// let nums = [1,2,3,4];

// let finalVal = nums.reduce((res ,el) => res+el );
// console.log(finalVal);


// spread in array literalsss 


// // Copying an array
// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];
// console.log(newArr);  // [1, 2, 3, 4, 5]

// // Spreading a string into an array of characters
// let chars = [..."hello"];
// console.log(chars);  // ['h', 'e', 'l', 'l', 'o']

// // Merging two arrays
// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];

// let nums = [...even, ...odd];
// console.log(nums);  // [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]




// // Object spreading - cloning and adding properties

// const data = {
//   email: "ironman@gmail.com",
//   password: "abcd",
// };

// const dataCopy = { ...data, id: 123, country: "India" };
// console.log(dataCopy);


// // Spreading an array into an object - indexes become keys
// let arr = [1, 2, 3, 4, 5];
// let obj1 = { ...arr };
// console.log(obj1);



// // Spreading a string into an object - indexes become keys
// let obj2 = { ..."hello" };
// console.log(obj2);



//  fetch data (url)


let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    const res1 = await fetch(url);
    const data1 = await res1.json();
    console.log("data1 = ", data1.fact);

    const res2 = await fetch(url);
    const data2 = await res2.json();
    console.log("data2 = ", data2.fact);
  } catch (err) {
    console.log("ERROR = ", err);
  }
}

getFacts();

console.log("I am happy");*/


// let  num = Math.floor(Math.random()*6)+ 1;
// console.log(num);

// let car ={
//     Name:"shwift",
//   Model:"hdjshkj",
//   price:256,
//   color:"red"
// }

// console.log(car.Name);




// console.log("Nice to meet u");
// {
//     let x=26;
//     const y=21;
//     x=32;

//     console.log(x,y);
// }

// let x=3;

// x++ + x++ - --x + --x + --x + x++ + x++

// console.log(x++ + x++ - --x + --x + --x + x++ + x++);



// function person(x,y){
//     console.log("a,b",x,y);

//     return a+b;

// }

// person(2,5);
// console.log("x")

// function hello(t,d){
//     console.log("x,y", t,d)

//        z=t+d;
//         p=10+5;
//      return z,p;
    
// }

// let x=hello(10,20);
// console.log(z);
// console.log(p);



// function add(){
//     console.log("hrr");
// }

// let x=add()
// console.log(x);


// console.log("normal function");

// sayGreet;

// console.log(sayGreet);
// function sayGreet(){
//     console.log("good moring");
    
// }

// sayGreet();



function add(a,b){
  return a+b;
}
console.log(add(2,3));

