//객체(Object) - 객체 만들기

//[1] : 사람 객체를 만든다면?
//원시 타입 --> 오직 하나의 데이터(문자열,숫자 등)만 담을 수 있는 자료형
//객체 타입 --> 원시 타입과는 달리 여러 가지 형태의 다양한 데이터를 담을 수 있는 자료형.

//[2] : 원시타입(Primitive Type)으로 person을 만든다면
/*
let person_name = "James"
let person_age = 30;
let person_nationality="USA"
let person_Power = 900;

alert(person_name); //James
*/


//[3] : 객체 타입(Object)으로 person을 만든다면? -->먼저 객체 선언을 한다.

/* 객체 작성법
let(const) 객체이름 ={
    key(멤버)1 : value1,
    key(멤버)2 : value2,
    key(멤버)3 : value3, //마지막의 콤마(,)는 생략해도 되고, 일관성 유지를 위해 넣어도 된다.
};
*/

const person = {
    name : `홍길동`,
    age : 20,
    male : true,
};

alert(`person객체의 이름은 =${person.name}이다`); //'홍길동'이 출력된다.
alert(`person객체의 나이는 =${person.age}이다`);
alert(`person객체는 남자인가? =${person.male}이다`);


//[!] : 꼭 기억하기
// 초보자가 제일 많이 하는 실수 :를 =으로 입력하는것

//객체를 구성하는 표현은 --> 키와 값의 쌍으로 구성하여 적당한 초기값을 부여한다.
//객체를 구성하는 멤버는 --> 자료형이 자료형이 달라도 상관없다.
//원시 타입으로 만든 것과 비교하면 --> 별도의 변수로 하나씩 만들어 사용할 필요없이 person 하나의 객체로 다 관리한다.
//얼마든지 person객체에 추가적인 멤버(key)를 붙일 수 있다. --> 사람 국적,혈액형,성격,이메일 등등
// 단,키(멤버)의 이름은 중복될 수 없다.

//이와 같은 방식으로 실생활의 모든 사물을 객체로 정의하고 표현할 수 있다.
//따라서 객체를 잘 표현할 수있도록 신경써서 객체의 멤버를 구성하고 필요에 따라 적절한 멤버를 추가해 사용한다.
// 객체를 만들어서 레고 조립하듯이 프로그램을 만들어가는 방식을 어려운말로 --> 객체 지향식 프로그래밍(OOP)이라고 한다.




//연습문제
//car객체를 정의해보시오.

const car={
    brand:`BMW`,
    color:`Black`,
    type : `ambulance`,
    horsepower : 170,
    engine : "diesel" 
}

alert(`car객체의 마력은 ${car.horsepower}입니다`)