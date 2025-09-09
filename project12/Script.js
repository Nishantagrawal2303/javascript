

// let apiKey="f70137cce8e1a3c022d06c479389d396"
// const city="indore";


let divcontainer =document.getElementById("container")

async function callApi(url){

try{
    const response=await fetch(url)
    const res =await response.json();
   
    res.map((d) => {
  
       
        return(
            
            divcontainer.innerHTML += `<div class="card" >  <img src="${d.img}" alt="">
            <p class="card-text">ratee : ${d?.rate}</p>
            <p class="card-text ">describtion : ${d?.dsc}</p>
            <p class="card-text ">price :${d.price}</p>
            </div>
`
        )
    })
    
   
}
catch(err){
    console.log("error in fetching data ", err);
}
}

callApi("https://free-food-menus-api-two.vercel.app/bbqs");



