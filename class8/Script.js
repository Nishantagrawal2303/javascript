
// // try{
// //     console.log("nishant agrawal");
// //   }
// // catch(err){
// //     console.log(err);
// // }


// // //try and catch 

// // try {
// //   console.log("Start...");
// //   let x = y + 10;   
// //   console.log("This will not run");
// // }
// // catch(err) {
// //   console.log( err.message);
// // }


// // // ye dusra example he 

// // try {
// //   let age = 15;
// //   if(age < 18){
// //     console.log("age shuld be greater then 18");
// //     // throw new Error("Age must be 18+");
// //   }
// //   else{
// //       console.log("Access Granted");
// //   }
 
// // }
// // catch(err) {
// //   console.log("Caught an error:", err.message);
// // }




// // splice 


// let str="apnabhai"


// console.log(str.slice(-1));


// function outer(){
//   let a=10;
//   function inner(){
//     a = a+20;
//     console.log(a);
//   }
//   return inner;
// }
// let obj1=outer();
// let obj2=outer();

// obj1();
// obj1();
// obj1();
// obj2();
// obj2();



// let ramu=()=>{
//   console.log("shyamu");
//    return null;
  
//   };
  
// // ramu(12,20);
// console.log(ramu());




// try{
//   console.log("and band ka toal");
// }
// catch(err){
//   console.log("lg gye bhai");
// }




// let string="Nishant Agrawal";
// let reversed="";


// for(let i=0;i<string.length;i++){

//   reversed=reversed+string[string.length-i-1];
// }

// console.log(reversed);



const pro=new Promise((res,rej) => {                // yaha prr niche se res aur rej aa jata he   or object me store ho jayega 
  let age = Math.floor(Math.random() * 30) + 1;
  if(age>=18){
    res("you are allowed to vote");                            // yaha se res jaa raha he upr ko 
  }else{ 
    rej("age is not 18");                                     // yaha se rej jayegaa uper ko 
  }
});

pro.then(                                                      //  yaha pro object me se 
  (vote)=>{                                                     // res yaha nikal liya he  aur vote me store hua
  console.log(vote);
})
.catch((novote)=>{                                             // novote me store ho jayega rej
  console.log(novote);                                         // rej yaha nikal liya he
});


const promise = new Promise((resolve) => {

  setTimeout(() => {
    resolve("Promise resolved after 1 seconds!");
  }, 1000);
});

console.log(promise); 

promise.then((msg) => console.log(msg));

































