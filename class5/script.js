//freeze method
const obj = {
    name: 'Nishant',
    age: 25,
    address: 'pune',
    hobbies: {
        indoor: ['chess', 'carrom'],
        outdoor: ['cricket', 'football']
    }
}
Object.freeze(obj);
obj.name = 'rahul'; // it will not change the name property
console.log(obj.name); //rohit
obj.address = 'mumbai'; // it will not change the address property
console.log(obj.address); //pune
delete obj.age; // it will not delete the age property
console.log(obj.age); //25
obj.hobbies.noone = ['reading', 'traveling']; // it will add new properties
console.log(obj.hobbies.noone); //['reading', 'traveling']
obj.hobbies.indoor[0] = 'ludo'; // it will change the value of indoor array
console.log(obj.hobbies.indoor); //['ludo', 'carrom']
console.log(obj.hobbies); // { indoor: [ 'ludo', 'carrom' ], outdoor: [ 'cricket', 'football' ], noone: [ 'reading', 'traveling' ] }
const {name, age, address, hobbies} = obj;
console.log(name, age, address, hobbies);
const{name : a}=obj;
console.log(a);
let arr =[12,12,32,56,3425,4,26,24]
for (let value of arr){
    console.log(value);
    if(value===56) break;
}
//rest operator
function add(a, b,...c) {
    console.log(c);
    return a + b;
}
console.log(add(5, 5, 15)); 
//spread operator
function minus(a,...b){
    console.log(b-a);
}
minus(10, 10, 15);