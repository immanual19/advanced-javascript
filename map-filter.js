const numbers=[3,4,5,6,7,8];
// const output=[];
// for(let i=0;i<numbers.length;i++)
// {
//     const element=numbers[i];
//     const result=element*element;
//     output.push(result);
// }

// function square = (element)=>element*element;

// const output= numbers.map(function(element){
//     return element*element;
// })

// console.log(output);

// const result=numbers.map(x=>x*x);
// console.log(result);

const bigger=numbers.filter(x=>x<5);
const isThere=numbers.find(x=>x>5);
//console.log(bigger);
console.log(isThere);