// 객체 (Object) - 값의 복사와 참조

//[1] : 원시 타입 (Primitive) vs 객체 타입(Object Type)
//원시 타입 --> 오직 하나의 값만 할당 -->변수끼리 할당(대입) --> 값을 복사 --> 원본이 영향받지 않는다.
//객체 타입 --> 객체끼리 할당(대입)하면 -->같은 객체를 가리키기 때문에 --> 원본도 영향을 받는다.


//[2] : 실습1 -->원시 타입
/*
let a = 100;

let b = a;
b = 200;

alert(`a의 값은 = ${a} b의 값은 = ${b}`)
*/
//여기서 b의 값을 변경한다고 해도 a는 영향을 받지 않는다. 값을 복사한 것이기 때문에


//[3] : 실습2 --> 객체 타입
/*
let person = {
    name : `홍길동`,
    age : 20,
};

let person2 = person;       

alert(`person이 출력하는 나이는 ${person.age}`);        //20
alert(`person2가 출력하는 나이는 ${person2.age}`);     //20


//person2가 값을 변경한다면?

person2.age = 30;
alert(`person2.age 값을 ${person2.age}로 변경하였습니다`);  //30
alert(`person.age의 값은 어떻게 되었을까요? = ${person.age}`);   //30
*/



// [4] : 정리
//원시 타입과는 다르게 객체 타입은 객체끼리의 대입시 사본을 만드는 것이 아니라 같은 객체를 가리키는 것이다.
//즉, 같은 객체를 가리키는 또 다른 변수가 하나 더 만들어진 것 뿐이다.
//이러한 특징은 "객체" --> 함수의 인자로 전달시에도 --> 마찬가지
//즉, 무거운 객체를 직접 전달하는 것이 아닌 함수에 참조로 전달한다.(매우 중요한 개념)


// [5-1] : 실습 -->객체를 함수의 인자로 전달(참조)

let person3 = {
    name : '홍길동',
    age : 20,
}

//persong3의 name을 바꾸는 구간
function replaceName(obj){
    obj.name = '을지문덕';
}



alert(`replaceName 함수 호출전 ${person3.name}`); //홍길동
replaceName(person3);
alert(`replaceName 함수 호출전 ${person3.name}`); //홍길동




//[5-2] : 실습2 --> 문자열을 함수의 인자로 전달(사본)
/*
let person = "홍길동"

function replaceName(str){
    str = "을지문덕"
    alert(str);
}

replaceName(person); //홍길동
alert(person);       //을지문덕

*/


//[5-3] : 숫자형을 함수의 인자로 전달(사본)
let PrimitiveNum=10;

function multiplyNum(num){
    num*=5;
    alert(`함수로 전달된 primitiveNum의 값은 ${num}이다`); //50
}

//함수 호출 전 vs후
alert(`현재 primitiveNum의 값은 ${PrimitiveNum}이다`); //10

multiplyNum(PrimitiveNum); //50

alert(`현재 primitiveNum의 값은 ${PrimitiveNum}이다`);