

// promise 

// A promise is an object that represents the 
// eventual completion (success) or failure(error) of an
//  asynchronous operation

// there are 3 states in promise 
// pending state , fullfiled state , rejected state




// // create a one promise jo kisi btn ke click hone par resolve ya reject hogaa


// const promise =new Promise((res, rej) => {
//   const resBtn=document.getElementById("resolveBtn");
//     resBtn.addEventListener('click',()=>{
//          res("promise resolve");
//     })
//     const rejBtn=document.getElementById("rejectBtn");
//     rejBtn.addEventListener('click',()=>{
//          rej("promise reject");
//     })
// });

// promise.then(ressult=>console.log(ressult)).catch(reeject=>console.log(reeject))



// rabdomly number aayega ni aayegaa 

// const promise1 = new Promise((reslove, reject) => {
     
//          const age = Math.floor((Math.random(0, 10) * 10));
//          setTimeout(() => {
//              if (age >= 5)
//                  reslove("Promise Done")
     
//              else
//                  reject("Promise Rejected")
//          }, 3000)
//      })
     
     
//      // console.log(promise1)   uee krke bhi pending aata he prr apneko interview me ye nhi btanaa he
//      console.log(promise1)//pending
//      setTimeout(() => {
//          console.log(promise1)
     
//      }, 5000) //promise resolve/reject     esaa krna he interview me




// api calling using fetch and async function


//   let arrr1= []
//  async function aapiCall(urll){
 
//     try{
//         const responsee =await fetch(urll)
//         // console.log(responsee);

//         const res = await responsee.json()
     
//          for(let i=0;i<res.length;i++){
//             arrr1.push(res[i]);
//          }

//      console.log(arrr1);
//     }
//     catch(err){
//     console.log(err);
//     }
// }

// aapiCall("https://jsonplaceholder.typicode.com/posts");




// //xhr
// const xhr= new XMLHttpRequest()
// xhr.open("GET","https://jsonplaceholder.typicode.com/posts")
// xhr.responseType = 'json'
// xhr.send()
// xhr.onload=(()=>{
// console.log(xhr.response[0].id)})




// //promise to fetch the data through API   promise to fetch the data through API  

// const ramu = new Promise ((res,rej)=>{
//     res (fetch("https://jsonplaceholder.typicode.com/posts"))
// })
// ramu.then((data)=> console.log(data))


// const promise= new Promise((resolve) => {
    
//     const apidata= fetch("https://jsonplaceholder.typicode.com/posts");
//        resolve(apidata)

//         // reject("promise rejected")

// })

// promise.then((ress)=>{console.log(ress)}).catch((errr)=>{console.log(errr)});




// api fetching data from the url using async and await 


let arrr1=[]
 async function apiCAll(urll){

    try{
       
        const dataa = await fetch(urll)
       const ress= await dataa.json()     // to meko pta he convert krna he json format me
       console.log(ress.results[0]);     // ye yaha prr  bhai 1 hi object he to vo aa jayegii

    }
    catch(err){
        console.log(" err msg",err);
    }
}

// apiCAll("https://datausa.io/api/data?drilldowns=Nation&measures=Population")

apiCAll("https://randomuser.e/api/");




