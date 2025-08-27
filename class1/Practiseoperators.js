
// Q1.

let sum= 5 + "5";
console.log(sum);    // 55

// yaha + operator he to js "5" ko as a string treat krega 

// Q2

let a =10;
a++;
console.log(a); // 11

// Q3

let b=3;
console.log(b**2);   // 9

// Assignmeny operators


// Q4 
let x = 10; 
x += 5; 
console.log(x); // 15


//  Q5

let y = 20; 
y *= 2; 
console.log(y);  // 40



// Q6 

let z = 8; 
z -= 3; 
console.log(z);  // 5
let aa = 7; 

let bb=3;

console.log(aa % bb);  // 1

// Q 7

let xx = 2; 
xx = xx * xx * xx; 
console.log(xx);   // 8


// Q8

let yy = 10; 
let zz = 5; 
console.log((yy + zz) / 3);  // 5


// Q9

let result = 10 - "5"; 
console.log(result); // 10-"5" ye apn ne glt kra tha  // original ans 5


// naya concept pta chla ki jab + operator use hota he to js "10" ise ek string lega 

// aur agr - , / % hoga to string ko number me convert krr dega 



// Q10

let value = "10" * "2"; 
console.log(value);     // 20


// Q11
let n = 5; 
 
console.log(n++ + ++n);  //12

// Q12


let aaa = 4; 
let bbb = 2; 
console.log(aaa** bbb);  // 16

// Q13

let m = 15; 
let nn = 4; 
let o = 2; 
console.log(m / nn * o);   // 7.5


// Q14
let output = 3 + 2 * 4; 
console.log(output);      // 11


// Q15

console.log("5" == 5);  // true

// Q16

console.log("5" === 5); // false

// Q17

let age = 17; 
console.log(age >= 18); //false

// Q18
console.log(true && false); // false

// Q19

let p = 10; 
let q = 20; 
console.log(p > 5 && q < 15);  // false



// Q20

let num = 8; 
console.log(num > 0 && num % 2 === 0);  // true


// Q21

console.log(typeof null);  //object

// Q22

console.log(+true);  // +1

console.log(-false); // -1

// Q23

let obj = { name: "John", age: 25 }; 
delete obj.age; 
console.log(obj); // name:"johan"


// Q19 

let voteAge = 20; 
let reesult = voteAge >= 18 ? "Adult" : "Minor"; 
console.log(reesult);                                   //adult

// Q20 
console.log(5 > 3 ? "Yes" : "No");           //yes

 
// Q21 
console.log(typeof []);   // object

// Q22 
let arr = []; 
console.log(arr instanceof Array);     // ye puchna  pdega  




console.log( " javascripttt quiz questionsssssssssssss");



//  Q1


 console.log(0 == false);  //true

//  Q2

 console.log(null == undefined); //ture

 //  Q3
  console.log("10" < 2);    // false

//  Q5

  console.log(3 != "3");  // false

//  Q6

 let x2 = 10;
 console.log(x2 >= 10); //  true

//  Q7

 console.log(true || false && false);   // true

//  Q8

  let a3 = 1;
  let b3= "Hello";
  console.log(b3 || a3);     // isme jo pehle true  hoga vo print krva dega  next ko check hi nhi krta 

//  Q9

  let user = "ram";
  let name = "Guest";
  console.log(user && name);    //

//  Q10

 console.log(!"");   // true


// Q11:

  console.log(1 && 0 && 2);   // 0

//  Q12:

  console.log("Cat" && "Dog");



  // loops in javascript

  // print reverse of a number 

  let number =123;
  let aaaa=0;

  for(let i=0; i<=number+1;i++){
   b5= number%10;
      aaaa=aaaa*10+b5;
      number= Math.floor(number/10);
  }
  console.log(aaaa);


  // 
  let str = "nan";

let original = str;
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed = reversed + str[i];  // string ko reverse karo
}

console.log(reversed);

if (original === reversed) {
  console.log("String is palindrome");
} else {
  console.log("String is not palindrome");
}


 
 // prime number

 let numver=5;

 isPrime=true;

 if(numver<=1){
  isPrime=false;
 }
 else{
  for(i=2;i<numver;i++){
    if(numver%2==0){
      isPrime=false;
      break;
    }
  }

}

if(isPrime){
  console.log("prime number");

}else{
  console.log("not a prime number");

}


// for in loop

let person = {name: "nish" , age:22 , graduation:"0"};

for(let key in person){
  console.log(key,":", person[key])
}


let array = ["a","b","c"];

for(let value in array){
  console.log(value,":", array[value])
}



// for of loop

let array2 = ["a",3,"c"];

for(let value of array2){
  console.log(value)
}




 