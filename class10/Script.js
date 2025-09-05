

// console.log("start");
// // isse apn ne pehle tag utha liya



// let head1=document.getElementsByTagName("h1")
// console.log(head2[0]);

// console.log(head1[0].innerText); // yaha isme jesa UI prr dikha rhe he vesaa aata he without space
// console.log(head1[0].textContent);  // isme jesa apn HTML element me likhenge vesa aata he with space


// here apn ne document me  div uthaya he id ki help se

// let divEle = document.getElementById("ayx");

// console.log(divEle.lastElementChild); // isse last element aa raha he
// console.log(divEle.firstElementChild.innerText);  //  isse first element ka text aa raha hhee

                                                                   

let head2 = document.createElement("h1");
head2.innerText="thisss iss headinggg 2";
// console.log(head2);

document.body.append(head2);






let Paraa=document.createElement("p");
Paraa.innerText="thiss iss paaaraaa 2";
// console.log(Paraa);
head2.appendChild(Paraa);

// console.log(head2);   // idhr head2 aayega 
       
// console.log(head2.firstElementChild);  // idhr paragraph aayega





 let head11 = document.getElementById("head1");
 let head22= document.getElementById("head2");
  
 function msssgg(){
    console.log("add event listerner iss called ");
 }

 head11.addEventListener("click",msssgg);

 head22.addEventListener("click", function(){ 
    head11.removeEventListener("click", msssgg);
console.log("removed the event listener");
});





















