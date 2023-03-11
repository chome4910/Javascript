//함수 - 함수 선언문 vs 함수 표현식 개념학습
//[1] : 함수 선언문--> 지금까지 배워왔던 함수 작성법 0

//[2] : 함수 표현식-->함수를 하나의 `값`으로 취급 --> 값으로 취급할 수도 있으니 --> 변수 하나 만들어서 대입(할당)도 할수있다.
//let byunsu = function hamsu() {alert('나 함수')};
//이 경우 함수자체를 변수에 가두는 것으로
// 함수의 이름(hamsu) 을 생략할 수도 있다. 이를 무명함수라고 한다. 
//이 경우 byunsu가 주인공이 된다. 

//호출 시에는 hamsu() 가 아니라 byunsu()로 호출해주어야한다.(값이 할당되었기 때문)



//[3] 다른 변수에게 할당이 되는가?
//let byunsu2 = byunsu;

//가능하다.






//함수- 함수 선언문 vs 함수 표현식 차이점

//[1] :함수 만드는 방법 자체가 다르다.
//함수 표현식은 할당 연산자(=)를 통해서 하나의'값'처럼 취급하여 함수를 변수에 할당

//[2] : 함수를 호출하는 위치가 다르다.
// 전통적인 함수 선운문 방식 --> 함수를 호출하는 위치가 크게 상관없다.(위에서 호출하든,아래에서 호출하든 상관x
//반대로 함수 표현식 방식은 -->반드시 함수 아래에서 호출해야 한다.


//[3] : 실습1 --> 함수선언문

//helloWorld();             ←여기서 호출해도 상관없음
function helloWorld(){
    alert('hello World')
}
//helloWorld();




//[4] : 실습2 -->함수표현식
// greeting();                  ←함수 표현식은 호출을 먼저하면 x Err가 난다.
let greeting = function showGreeting(){
    alert('안녕하세요 반갑습니다.')
}

// greeting();


'use strict'; //엄격하게 작성한 스크립트를 실행
//함수 - 함수 선언문과 함수 표현식의 차이를 보여주는 예제를 만드시오
//조건 분기에 따라 실행하는 함수를 제작한다.

//[1] : 함수 선언문
// let height = prompt("당신의 키를 입력해주세요 !","예)120");
//키 조건에 따라 함수를 실행하게끔
 //아래는 함수 선언문이지만 이렇게 상단에서 호출할시에는 에러가 난다.
//이유는 if라는 블록이 생성 되었기 때문이다.
//그래서 if안쪽에서는 호출을 해주면 정상적으로 작동한다.

/*
if(height<120){
    function showMessage(){alert("키가 작아서 청룡열차를 탈 수 없습니다.");}
}
else if(height>=120){
    function showMessage(){alert("청룡열차를 탈 수 있습니다.");}
}
else{
    function showMessage(){alert("올바른 키를 입력해주세요.");}
}
*/

// showMessage(); //이렇게 바깥에서 호출할시 실행은 되지만, 
//use strict같이 엄격모드에서는 실행되지x

//이를 제대로 실행되게 하려면 아래처럼

/*
let height = prompt("당신의 키를 입력해주세요 !","예)120");
if(height<120){
    function showMessage2(){alert("키가 작아서 청룡열차를 탈 수 없습니다.");}
    showMessage2(); //이렇게 블록안에서 실행해주면됨. 
}
else{
    function showMessage2(){alert("청룡열차를 탈 수 있습니다.");}
    showMessage2(); 
}
*/

// 가능은 하지만별로 권장하지는 않음



//[2] : 함수 표현식 방법
/*
let height = prompt("당신의 키를 입력해주세요 !","예)120");
let showMessage2;

if(height<120){
    showMessage2=function(){alert("키가 작아서 청룡열차를 탈 수 없습니다.");}
}
else{
    showMessage2=function(){alert("청룡열차를 탈 수 있습니다.");}
}

showMessage2();
*/





//혼자 위에 안보고 짜보기

let message3=prompt("청룡열차를 탑승하려면 키를 알려주세요");
let messagePrint //임의로 출력해줄 메세지 변수 지정

if (message3<120){
    messagePrint=function(){
        alert("작아서 못탐");
    }
}
else{
    messagePrint=function(){
        alert("타도됨");
    }
}

messagePrint();



//앞서 다룬 키 조건에 따라 함수를 실행하는것을 물음표 연산자로 바꾸어 짜본다면?
//[1] 
/* 앞에거
let height = prompt("당신의 키를 입력해주세요 !","예)120");
let showMessage2;

if(height<120){
    showMessage2=function(){alert("키가 작아서 청룡열차를 탈 수 없습니다.");}
}
else{
    showMessage2=function(){alert("청룡열차를 탈 수 있습니다.");}
}

showMessage2();
*/

// (조건식)?a:b를 이용하여 짜보기. true면 a false면 b를 출력함.
let height = prompt("당신의 키를 입력해주세요 !","예)120");
let showMessage2 = (height<120)? //조건식
    function(){alert("키가 작아서 청룡열차를 탈 수 없습니다.");}: //a
    function(){alert("청룡열차를 탈 수 있습니다.");}; //b

showMessage2();

//[3] : 함수 선언문 vs 함수 표현식 어떤 것을 사용해야 하는가?
//크게 상관없으나 초보자는 전통적인 함수 선언문 방식에 익숙해지는 것이 좋다.
//위와 같이 조건에 따른 특정 함수를 수행해야 한다면 함수 표현식을 사용한다.
//많은 JS라이브러리들에서 함수 표현식과 화살표 함수 등을 사용하기 때문에 차츰 공부해나가면서 익숙해지면 된다.



