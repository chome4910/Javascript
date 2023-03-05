//[★] : 자바스크립트 비교 연산자-불리언형(불린형)

//[1] 꼭 기억하기
// 불리언형 -->참 (true) vs 거짓 (false) -->긍정 vs 부정
// 이번에는 자료형을 공부하는 것이 아닌 이런 불리언 값을 출력하는 경우가 있는데 이런것들 ??

//[2] 비교 연산 -->true vs false 값을 반환 --> 즉,비교 후의 결과값을 참,거짓 --->긍정,부정
console.log(`100>200 = ${100>200}`) ; //false
console.log(`100>200 = ${100<200}`) ; //true
console.log(`10==100 = ${10==100}`) ; //false
console.log(`10!=100 = ${10!=100}`) ; //true

//[3] : 변수에 불리언값을 할당
console.clear();
let a = 100>50; //true
let b = 0; //false 0이라성
let c = "0"; //true 문자라성
let d = '333';
console.log(a);
console.log(b);
console.log(c);
console.log(d);

if(a)
    console.log(`변수 a의 값은 ${a},${typeof a}`);
if(b)
    console.log(`변수 b의 값은 ${b},${typeof b}`); //실행되지x 0이라서 false가 되어버림
if(c)
    console.log(`변수 c의 값은 ${c},${typeof c}`); // true/false도 아닌 그냥 `문자열 0`이 출력된다. 타입체크를 해보면 -->string
if(d)
    console.log(`변수 d의 값은 ${d},${typeof d}`); //실행되지x 



//[4] : 위3번 변수들의 논리 연산값(true/false)을 출력하고 싶으면 --> Boolean()사용
console.log(c); // 0 값을 그대로 출력하기
console.log(Boolean(c)); // true / false로 출력
console.log(typeof(c)); //string,number등 타입을 출력

console.log(`c 변수의 값은 ${c}고, 논리연산값은 ${Boolean(d)}이고, 타입은 ${typeof(d)}이다`);
//변수의 값은 0고, 논리연산값은 true이고, 타입은 string이다