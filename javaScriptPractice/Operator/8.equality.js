// 동등 비교 관게 연산자 (Equality Operators)
// == 값이 같음
// != 값이다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log( 2==2);
console.log( 2!=2);
console.log( 2!=3);
console.log( 2==3);
console.log( 2 == '2')
console.log( 2==='2'); // 타입도 중요!
console.log(true == 1);
console.log(true ===1);
console.log(false ==0);
console.log(false===0);
console.clear();


const obj1 ={
    name :'js'
};
const obj2 = {
    name:'js'
};
console.log(obj1 == obj2);
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);