let bird;
function add(num1,num2){
    console.log(num1+num2);
    return;
}
const result=add(13,82);
console.log(bird);
console.log(result);

function add(num1,num2=10){
    console.log(num1,num2);
}
const result=add(13);
console.log(result);
const person={name:'Tom',phone:'129293'};
console.log(person.gf);

let fun=undefined;
console.log(fun);

let ages=[2,5,9];
console.log(ages[11]);