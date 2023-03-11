// 함수 -화살표 함수(Arrow Function) 기본 사용법
// 함수 표현식보다 더 간결하고 편리하게 함수를 만들 수 없을까?
//간결하고 편리하게 ->짧게 줄여쓰면 편리하겠지만, 처음엔 적응이 안된다.

//함수 선언문 --> 함수 표현식 --> 화살표 함수


//[1] : 함수 표현식
/*
let arrowFunc=function(a,b){
    return a*b
};

alert(arrowFunc(10,20)); //200
*/



//[2] : 화살표 함수로 전환-->빼도 의미를 유추할 수 있다면 과감히 뺀다.
/*
let arrowFunc2 = (a,b) => a*b; //위와 비교하면 function,중괄호,return이 생략되었다.
alert(arrowFunc2(10,20)); //200
*/



//[3] : 인자값이 하나라면? --> 괄호가 생략가능 --> 화살표 우측에 함수본문을 작성한다고 생각하고 작성
//let arrowFunc3 = (name) =>`반갑습니다.${name}회원님`
//let arrowFunc3 = name =>`반갑습니다.${name}회원님`




//[4] : 인자값이 없는 경우는? --> 괄호를 생략할 수 x
/*
let arrowFunc4 = () =>100;
alert(arrowFunc4());
*/


//[5] : 리턴문이 있는 경우에는?
//함수 표현식으로 먼저 만들어보기

//[표현식]
/*
let arrowFunc5 = function(a,b,c){
    let total_sum=a+b+c;
    return total_sum;
};

alert(arrowFunc5(1,2,3));//6
*/


//[화살표 1차]
/*
let arrowFunc5 = (a,b,c)=>{
    let total_sum=a+b+c;
    return total_sum;
}
alert(arrowFunc5(1,2,3));//6
*/

// [화살표 2차]
/*
let arrowFunc5 = (a,b,c)=>a+b+c;
alert(arrowFunc5(1,2,5));
*/


//혼자서 만들어 보기!
/*
let noise = (a,b) => `${a+b}둘다 너무 시끄럽다`;

alert(noise(`유니`,`보리`));
*/