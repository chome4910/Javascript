//[★] 자바스크립트 비교 연산자 - 정수 vs 실수 비교

//[1] 꼭 기억하기
//값 자체로 비교하며, 소수점이 필요없으면 뺀다. ex) 10.0 ->10
//다른 언어와는 다르게 Javascript는 정수와 실수를 각각의 자료형으로 구분하지 않는다.
//단,구분하는 메서드는 제공한다. ->정수/실수의 구분은 가능하다.


//[2] : 실습
console.log(`10 == 10.0 비교 결과는 =${10==10.0}`); //true 10.0을 출력하면 10이기 때문에
console.log(`10 === 10.0 비교 결과는 ${10===10.0}`); //ture 정수든 실수든 둘다 자료형이 Number이기 때문에


//[3] : 정수,실수--> 자료형 출력
console.log(`숫자 10의 자료형은 =${typeof(10)}`)//number
console.log(`숫자 10의 자료형은 =${typeof(10.0)}`)//number


//[4] : 정수 구분하기 -->Number.isinteger()
console.log(`1은 정수인가요? = ${Number.isInteger(1)}`); //true
console.log(`0.1은 정수인가요? = ${Number.isInteger(0.1)}`); //false
console.log(`3.14는 정수인가요? = ${Number.isInteger(3.14)}`); //false


//[5] : 값을 구분시 주의사항
console.log(`10.0은 정수인가? = ${Number.isInteger(10.0)}`); //true
console.log(`10.0의 출력값은=${10.0}이고, 결과값은 정수인가? = ${Number.isInteger(10.0)}`);
console.log(`3.14+6.86=${3.14+6.86}`);


//[★] : 문자열-->정수,실수로 바꾸기(integer,float)
//[6] : 문자열 -->정수로 바꾸기
console.clear();
let someValue="10"; //문자열
console.log(`변수의 타입은? = ${typeof(someValue)}`) //string.문자열
console.log(`변수는 정수인가요? = ${Number.isInteger(someValue)}`) //false.숫자가아니라 문자기 떄문에
console.log(`변수를 정수로 바꾸면? = ${Number.parseInt(someValue)}`) //문자열10을 숫자10으로 바꾸는 메서드
console.log(`이제는 변수가 정수인가요? = ${Number.isInteger(someValue)}`)
//마지막 결과는 false가 나온다.맨위의let someValue="10" 값이 나오는거임


console.log(`이제는 정수인가요? = ${Number.isInteger((Number.parseInt(someValue)))}`) //true

//[7] : 문자열 -->실수로 바꾸기
//parseFloat() --> 정수가 아닌 실수로 변환 -->소수점을 버리지 않고 그대로 사용.
let someValue2 = "3.14";
console.log(`3.14를 정수로 바꾸면? = ${Number.parseInt(someValue2)}`) // 소수점 뒷자리 없애고 3이됨
console.log(`3.14를 실수로 바꾸면? = ${Number.parseFloat(someValue2)}`) //3.14
console.log(Number.parseFloat(3.00)); //소수점이 0이라 생략하면 정수로 인식


//[8] : 공백이 있으면 -> 맨앞에 숫자만 정수로 변환 --> parseInt,parseFloat 모두 마찬가지
console.clear();
let a = "100 200 300"
let a1=Number.parseInt(a); //세 숫자중 100만 정수화 된다. 200,300은 값에 들어가지 x
console.log(`변수 a1의 출력값은 ${a1}이고,타입은 ${typeof(a1)}이다 ${Number.isInteger(a1)}`);

//[9] : 공백이 아닌 문자가 있어도 -->맨 앞에 숫자만 정수로 변환한다.,
console.clear();
let b="3.14만명";
let b1=Number.parseFloat(b);
console.log(`변수 b1의 출력값은 ${b1}이고 타입은 ${typeof(b1)}이다`);