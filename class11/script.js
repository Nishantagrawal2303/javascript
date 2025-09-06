

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.1
// console.log("hey");
// {
//   let a = 1;            
//   let b = 2;      
//   console.log(a);  // 1
//   console.log(b);  // 2
// }
// console.log(a);  // let se bnaya he isiliye block ke bahar ni use hoga
// console.log(b);
// // Ans=>
    

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.2
// console.log("hey");  // hey 
// {
//   var a = 1;
//   var b = 2;
//   console.log(a);   // 1
//   console.log(b);   //2
// }
// console.log(a);   // 1
// console.log(b);   //2
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.3
// console.log(a);         // undefined hoga kyuki var se he
//  var a=()=>{
//      console.log("hello");
//      }
// // Ans=>



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.4
// console.log(a);         // idhr function ki body store hogi
//  a()                    // idhr function call ho jayega to hello print hoyega
// function a(){
//     console.log("hello");
// }
// Ans=>



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.5
// let x=20;
// function printValue(){
//     console.log(x); //ans is undefined bcs access x without declare you were using
//     var x=10;
// }
// console.log(x);          // yaha 20 aayega
// printValue();
// // Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.6
//  let x=20;
 
// function printValue1(){
//     console.log(x);      // 20 yaha 
//      x=10;             // yaha ab x ki value 10 ho gyi
//      console.log(x);    // yaha 10 aayega 

// }

// console.log(x);  // yaha 20 aayega
// printValue1();  // 20 aur 10 yaha se aara he

// // Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let xx=20;
 
// function printValue11(){
//     console.log(xx);      // 20 yaha 
//      xx=10;             // yaha ab x ki value 10 ho gyi
//      console.log(xx);    // yaha 10 aayega 

// }
// printValue11();      // yaha 20 aur 10 jayega 

// console.log(xx);  // yaha 10 aayega ,  pehle function call hua he to function me
// //  apn ne xx ki value change krke 10 krr di he isliye
// //  ab 10 ho gyi 

// Ans=>



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Q.7
// console.log("start ");    //1 start 
// setTimeout(()=>{
//     console.log("setTime"); //3  settime
// },0);
// console.log("end");           //2 end 
// // Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Q.
// console.log(y);             // reference error y is not defined
// console.log(typeof(y));
 
// // Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // Q.8
//  console.log(typeof(y)); // undefined
// console.log(y);           //     refrence error y is not defined 


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.9
// function abc() {
//   a = 10;
//   b = 20;
//   console.log(a);//10
//   console.log(b);//20
// }
// abc();
// console.log(a);//10
// console.log(b);//20
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.10
// console.log([1,2,3]===[1,2,3]);                 // false  // inme address alg alg hota he isliye false
// console.log({ name: "a" } == { name: "a" });    //false
// // Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   Q.11
// console.log(name);       
// var name = "John";

// // Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.12
// setTimeout(() => {
//   console.log("I am setTime out ");   // 3 i am set-timeout
// });
// Promise.resolve().then(() => {
//   console.log("I am Promise  ");     // 2 i am promise
// });
// console.log("I am end here ");       // 1 iam end here
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.13
// let a = 10; 
// console.log(  typeof typeof a );  // string he kyuki 2 bar typeof hai  pehli bhai number aaya lekin aaya ese "number" to ye ab iska type string aaya isiliye output is string
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.14
// let a=10;
// console.log(++a)   // 11 pehke hua inc isiliye 11
// console.log(a)     // 11    ab to 11 ho gya
// let a1=10; 
// console.log(a1++)  //10    plus hua ni abhi 
// console.log(a1)   // 11   upr memory me gya tha
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.15
// console.log(1<2<3)  // true, kyuki 1<2 true , 2<3 true
// console.log(3>2>0) //  true , kyuki 3>2 true , true>false , true ,, ye 0 ko false leta he
// console.log(3>2>1) // false , kyuki 3>2 true, prr true>true false,

// console.log(3>2==true); // true , kyuki ye true== true lega last mee 
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.16
// const z=null;
// console.log(typeof z)  // object
// const a=undefined;
// console.log(typeof a)  // undefined 
// Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.17

// function printVal(){
//  var x=10;
//   console.log(x);//10
// }
// printVal();       // yaha isme function call hua variable bna aur khtm bhi ho jayega
// console.log(x); // refrence error aa jayega x is not defined 
// Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.18
// function demo(){
//   console.log("hey");  //hey print aur undefined
                          
// }
// const ans=demo();
// console.log(ans);  
// function demo1(){
//   return "hey";
// }
// const ans1=demo1(); 
// console.log(ans1);    // hey
// Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.19

// console.log(a);
// console.log(b);
// var a=b=5;   //  undefined and refrence error 
// Ans=>


// Output_Based_Js_Quizz_1.txt
// External
// Displaying Output_Based_Js_Quizz_1.txt.


// ######################## MOST IMP QUESTION ####################################################
// Q.20
// const user1 = {
//   userName: "syam",
//   age: 20,
//   address: {
//     city: "katni",
//     state: "mp",
//   },
// };
// const user2 =user1;

// user2.userName = "Dr. K. Anji Reddy";
// user2.address.city = "indore";
// console.log("user1", user1); 
// console.log("user2", user2);         

// isme simple dono me change ho jayega  userr 1 me bhi aur user 2 me bhi
//  ktuki sirf value assign ki hai memory me to same hi addrees he memory
//  me change ho to dono me change ho jayegaa naa mera bhai
// to updated output aaayega dono me 
// Ans=>

// ##############################################################################################


// // Q.21
//  const user11 = {
//    userName: "syam",
//    age: 20,
//    address: {
//     city: "katni",
//      state: "mp",
//    },
//  };


//  const user12 = { ...user11};
//  user12.userName = "Raghav";      // ye sirf object 12 me change hoga kyuki ye outer wala he
//  user12.address.city = "Jab";  // ye direct memory me change ho raha he kyuki  nested hai isiliye 
//  console.log("user11", user11); // shyam , jab 
//  console.log("user12", user12);  // ragav jab 



// 2nd category
// const user12 = { ...user11,...user11.address };
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur"; 
// user12.address.state= "mh"; 
// console.log("user12 has newly assign city which in user11", user12); 


// 2nd category bohot tagdi thii bhai mjaa aa gyaa prr chatgpt se solvee hua hai aur bohot chize clear bhi hui hai 



// 3rd category
// const user12 = JSON.parse(JSON.stringify(user11));
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur"; 
// console.log("no changes bcs we do deep copy", user11); 
// console.log("name and city in user12 object has changed", user12); 
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log([1,2,3]===[1,2,3]);                   // false
// console.log({ name: "a" } == { name: "a" });      // false
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// const myNumbers = [2, 4, 5, 6, 7];
// const modifyArray = myNumbers.map((num) => {
//   return (num = num / 2);                       // bhai agr return keyword use krenge to curly braces lgana pdegaa
// });
// const modifyArray1 = myNumbers.map((num) => (num = num / 2)); // shorter syntax ,yaha return keyword use nhi krr rhe to curly braces bhi nhi lgana
// console.log("Given Array ", myNumbers);
// console.log("Modified array ", modifyArray);
// console.log("without return ", modifyArray1);
// // Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// filter() method ka use
// Ye array ke elements ko filter karne ke liye use hota hai.
// Ek condition lagate ho aur sirf wo elements return hote hain jo condition me true ho.
// Hamesha naya array return karta hai, original array change nahi hota.


// Q.
// const Numbers = [0, 2, 4, 5, 6, 7];
// // ans is below
// const filterArray = Numbers.filter((num) => {
//   return num >= 4;
// });

// console.log("Orginal array ", Numbers); yaha numbers aayenge 
// console.log("Filter array", filterArray);  // [4,5,6,7] aayega array ke form me 
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Q.
// function values(a,...args,c){  //error aayega kyuki jo spread operator hota he use baad app koi paramenter nhi le skte , pehle lee skte ho
//   console.log("a="+a,args);
// }

// // function values(a, c, ...args) {

// //   console.log(a, c, args);//ans-: 1 10 [ 2, 4, 5, 6, 8 ]
// // }

// values(1, 10, 2, 4, 5, 6, 8);
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log(name);
// var name = "John";
// Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// setTimeout(() => {
//   console.log("I am setTime out ");
// });
// Promise.resolve().then(() => {
//   console.log("I am Promise  ");
// });
// console.log("I am end here ");

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// async function PrintValue() {
//   return "Hello world";
// }
// // let ans = PrintValue();  // yaha pr async function hmesha promise return krega aur promise hi store hoga ans  me
// // console.log(ans);        // yaha prr promise print hua hai aur usme fullfiled result hello world hai    
// // // //Ans


// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Q.
// async function storeAns() {
//   let result = await PrintValue()  // yaha prr function call hua aur hello world store hua result me na ki promise store hua
//   console.log(result); // yaha hello world aa gya
//   return result;
// }
//  storeAns(); // hello world  not pomise


// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//  async function PrintValue() {
//   return "Hello world";
// }
// let ans =  PrintValue(); // yaha promise aaya he 
// console.log(ans);        // yaha promise print hua he 
// async function storeAns() {
//   let result = await PrintValue();
//   console.log(result);
//   return result;
// } 
//  storeAns();       //  hello world aaya he
// //Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// let result = PrintValue();
// console.log(result);
// //Ans=> 


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log([1,2]==[1,2]);  // false 
// console.log([1,2]===[1,2]); // false
// console.log(["3"]==[3]);     // false
// console.log("3"==3);   // true
// console.log("3"===3);   // false
// //Ans=> 



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.26
// function outer() {
//   function inner() {
//     console.log(x);
//   }
//   const x = 10;
//   return inner;
// }
// const result = outer();
// result();                              // 10
// // //Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
//  for(var i=0;i<=3;i++){    // var me kya ho raha he i 4 ho jaa raha he aur function
//    setTimeout(()=>{
//        console.log(i)
//    },2000);
//  }
//  for(let  i=0;i<=3;i++){
//    setTimeout(()=>{
//        console.log(i)         //  yaha prr i har baar ban raha he kyu let he isiliye 0,1,2,3 aayega
//    },0);
//  }
//  for(const i=0;i<=3;i++){
//    setTimeout(()=>{
//        console.log(i)    // yaha to error aayega 
//    },0);
//  }
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
//  for(var i=0;i<=3;i++){
//   function ab(i){
//       setTimeout(()=>{
//       console.log(i)
//   },1000);}
//   ab(i);
// }
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// for (let i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 + i * 1000);
// }
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// const foo=()=>{
//   console.log(this.name);
//  }
//  //Ans


//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
//  function foo1(){
//   console.log(this.name);
// }
// foo1.call({name:"mohan"})
//  //Ans


//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// function foo1() {
//   console.log(this.name); 
  
//   const bar = () => {
//     console.log(this.name); 
//   };
//   bar();
// }
// foo1.call({ name: "Mahi" });
//  //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q. Freeze the object 
// const user = {
//   id: 123,
//   name: "abc",
//   address: {
//     city: "katni",
//     state: "MP",
//   },
// };
//  //Ans



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q. 
// fool();
// var fool=20;
// function fool(){
//     console.log("Calling ")
// }
// fool();
// //Ans

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.

// async function foo23() {
//   throw new Error("Hello");
//   return "hello";
// }
// const result12 = foo23();
// console.log("Reject the Promise ",result12);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// async function greet() {
//   return new Promise(() => {});
// }
// const ans = greet();
// console.log("Pending the promise",ans);
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q. Flatten an given below an array 
// // let arr= [1,[2,3],[[4,5]],[[[6]]]];
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Q.
// // console.log(typeof(NaN));// this is number
// // console.log(Nan===NaN);// it can anything  so return false


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Q.
// Destructure the property from the object
// const user = { userNamename: "ramesha", age: 24 };


