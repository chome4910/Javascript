// if 조건문 - 기본

//[1] 꼭 기억하기
// 괄호안의 조건식이 true이면 바로 밑의 코드블록이 실행-->조건문
// 그냥 true만 넣어도 조건식은 참.
// 그외에도 다양한 값이 ture로 올 수 있다. 그래서 그런걸 잘 기억하는것이 중요하다. 필요할 때 사용할 수 있어야한다.
// false -> "",null,undefined,0,NaN


//[2] : 기본 사용법
//if(조건식){}
//끝에 세미콜론은(;) 여러 줄일 때는 보통 안쓴다.
let a = 100;

if(a == 100){
    console.log("100점 입니다.");
}
else{
    console.log("100점이 아닙니다.");
}

//[3] : 한 라인으로 사용 --> 괄호는 있어도되고 , 없어도된다.
let b=200;

//[3-1]//한줄로 쓰기
if(b==200){console.log("200점 이네요");}; 

//[3-2]//중괄호 없이 쓰기
if(b<300) console.log("300보다 작네요"); //중괄호 없이 쓰기

//[3-3]//중괄호 없이 두줄로 쓰기
if(b>300) 
    console.log("300보다 크네요"); //중괄호 없이 두줄로 쓰기

//[★] : 한 라인으로 작성시 주의할 사항
//  (1) 꼭기억하기
//if조건식이 참일 때 실행되는 라인이 두라인 이상이면 주의->자바도 마찬가지
//괄호 없이 사용하려고 할 때
let c =300;
if(c==300){
    console.log("300입니다.");
    console.log("바보야"); //두라인 이상
}
else{
    console.log("300이 아닙니다.");
}
//위 문장은 if조건식 라인이 2줄이기 때문에 오류가 나게된다.그래서 {}코드블록 첨부
//  (2) : else절 없이 if문만 사용한다 해도 -> 두라인 이상의 코드를 실행한다면 반드시 코드블록 써주기



//[★] : if 조건문-참(true) vs 거짓(false)
//[1] : 꼭 기억하기
//기본적으로 if()문은 괄호안의 표현식을 평가 후 결과값을 참/거짓으로 변환한다.
//자바스크립트에서 논리 연산값이 false값을 가지는 경우->"",null,undefined,0,NaN
//이런 값들을 제외하면 -->true


//[2]:0과 1비교하기
//if 문은 괄호안이 true일 때만 항상 코드블록을 수행한다 -->false 값을 괄호안에 넣으면 실행x
console.clear();
if(0){ //조건문이 이기 때문에 실행되지 않는다.
    console.log("나는 실행될까요?")
}
if(-1){
    console.log(Boolean(-1)); //Boolean을 사용하여 true/false값 출력가능
    console.log(Boolean(0)); //false 
}


//[3] : !(Not)
if(!null){
    console.log("난 처음에 false 값 이었지만 !을 붙여주면 나의 값은 =" + !null);
}
if(!undefined){
    console.log("난 처음에 false 값 이었지만 !을 붙여주면 나의 값은 =" + !undefined);
}
if(!0){
    console.log(`난 처음에 false 값 이었지만 !을 붙여주면 나의 값은 =${!0}`);
}
//!은 not의 의미이다. null=false의 값을 가지므로 !null=true가 되어 아래 console.log를 출력한다.


//[4] : 연산의 결과가 참인 변수를 넣어도 된다.
console.clear();
let isTest= 10>9; //9 보다는 크고 10보다는 작은 수는 참의 값을 가진다.
console.log(`isTest 변수의 값은 ${isTest}이다`); //isTest 변수의 값은 true이다.

if(isTest){
    console.log(`isTest 변수의 값이 참일 때만 출력돼요=${isTest}`);
}
else{
    console.log(`거짓`);
}

//[★] : if 조건문 - 예상 은퇴 연령 맞추는 프로그램 만들기
//[1]꼭 기억하기
//else절 -->if()문의 괄호안이 참(true)일 때 수형되어지고 ->else절은 반대로 거짓(false)일 때 수행
//else if-->복수 처리
/*
console.clear();
let age_of_retirement = prompt(`대한민국 법정 은퇴 연령은 몇 살인가요?`,"입력해주세요");

if(age_of_retirement==55){
    alert("정답입니다")
}
else{
    alert("틀렸습니다")
}
*/

//[2] : else if-->복수 처리도 가능
// (만들어 보기) 예상 은퇴 연령을 맞추는 프로그램 만들기

/*
console.clear();
let age_of_retirement2 = prompt(`대한민국 법정 은퇴 연령은 몇 살인가요?`,"입력해주세요");
if(age_of_retirement2==70){
    alert("정답입니다")
}
*/

console.clear();
let answer = 70
let expected_age_of_retirement=prompt(`대한민국 법정 은퇴 연령은 몇 살인가요?`,"입력해주세요");

if(expected_age_of_retirement < answer){
    alert(`조금만 더 높여보세요`)
}
else if(expected_age_of_retirement > answer){
    alert(`조금만 더 낮춰보세요`)
}
else{
    alert(`정답입니다`)
}