//함수 - 전역변수 vs 지역변수
//변수는 변수의 스코프(scope)에 따라 전역변수와 지역변수로 나뉜다.

//[1] : 전역변수(Global Variable)
//함수 외부에서 선언된 변수로,프로그램 전체 코드(함수)에서 자유롭게 접근할 수 있다.

//[2] : 지역변수(Local Variable)
//함수 내부에서 선언된 변수로,프로그램 전체 코드(함수)에서 자유롭게 접근할 수 없다.
//함수 호출시 함수 내부에서만 사용되고,함수가 종료시 소멸된다.
//가장 핵심 -->함수 


//[3] : 실습1
 let name="HongKilDong";

// Function testFunc(){
    let  name="KangGamChan";
// }

 alert(name); //여기서는 HongKilDong이 출력된다. KangGamCha은 지역변수이기 때문이다.




//[4] : 실습2
var a =123;
function testFunc2(){
    var a=456;
}

alert(a);       //여기서도 123이 출력된다. 456은 지역변수이기 때문이다.



