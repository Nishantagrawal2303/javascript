// This keyword
let obj={
    fname: "John",
    lname: "Doe",
    age: 30,
    fullName: function() {
        return this.fname + " " + this.lname;
    }
};
console.log(obj.fullName());

console.log(this);
function showThis() {
    console.log(this);
}
showThis();

const showThis2 = (() => { console.log(this); })();

new showThis();

let obj2={
    fname : "uwehcnd",
    function1: function() {
        console.log(this);
         function function2() {
            console.log(this);
        }
        function2();
    }
};
obj2.function1();

let obj3={
    fname : "hey",
    function1: () => { console.log(this);  const obj4 = { function2: () => { console.log(this); } }; obj4.function2(); }  
};
obj3.function1();


let obj4={
    func1 : function() {
        console.log(this);
        const func2 = () => { console.log(this); }
        func2();
    },
    fnamme : "hey"
};
obj4.func1();
 
city="indore"
let obj5={
    city:"kere",
    obj6 : {
     citi :  () => {
     console.log(this.city);
    }
    }
}
obj5.obj6.citi();
console.log(obj5.city)



//shallow copy
let object1= {
    username: "nish",
    age: 10,
    email: "nish@gmail.com",
    address: {
        city: "indore",
        pincode: 452001,
        state: "mp"
    }
};
console.log(object1);
// let object2 = object1;
// object2=Object.assign(object1)
// object2=Object.assign({},object1) 
var object2={...object1}
console.log(object2);
object2.age=21;
object2.address.city="delhi";
console.log(object2);
console.log(object1);

