//반복문 - for

//[1] : for-->가장 대표적인(많이 사용하는) 반복문 -->연속된 동일한 반복 작업을 처리.
//보통 명확하게 반복의 횟수가 지정되어 있다면 for 반복문을 사용, 아니라면 while,do..while반복문을 사용한다.
//1~10까지 출력하시오
/*
document.write(1);
document.write(2);
document.write(3);
document.write(4);
document.write(5);
document.write(6);
document.write(7);
document.write(8);
document.write(9);
document.write(10);
*/

//[2] : 기본적인 사용법
/*
for(let i=0;i<10;i++){
    document.write(i);
}
*/

//[3] : 각각의 용도
//let i = 0 ; -->반복시 초기값 --> 반복을 시작하면 최초 한번만 실행 -->예제에서는 0부터 시작.
//i < 10; -->조건식 -->참(true)이면 계속 수행하고, 거짓(false)이면 stop한다.
//i++; -->증감식 --> 반복 처리할 코드가 먼저 실행된 후 --> i++이 되어서 1증가.

//[4] : 실습 --> 1~10까지 출력 -->다양한 방식으로 출력이 가능-->i,j를 변수로 많이 사용

/*
for(let i=1;i<11;i++){
    document.write(i+"<br>");
}

document.write('-----------------<br>')
for(let i=1;i<=10;i++){
    document.write(i+"<br>");
}
*/








// 반복문 - while
//[1] : 기본적인 사용법
//while(조건식){}

//[2] : 설명
//while문은 조건식을 바로 비교하면서 반복문에 들어간다.
//따라서,조건식이 참이 아니라면 아예 반복문 자체를 들어가지 않는다.
//중요한건 반복문 안에서 조건이 계속 참이면 무한반복에 빠지기 때문에 조건의 변수 값을 증가시켜 조건이 거짓이 되도록 해줘야 한다.

//[3] : 실습 -->1~10까지 출력해보기.

let i=1;
while(i<=10){
    document.write(i+"<br>")
    i++; //이것을 생략하면 무한 반복에 빠진다.
}








//반복문 - do..while
//[1]:기본적인 사용법
/*
do{

    i++
}while(조건식);
*/

//[2]:설명
// do가 맨 앞에 있다는 것은 묻지도 따지지도 말고 먼저 "해라(do it)"라는 뜻이다.
// 조건은 나중에 비교하고, 먼저 실행하라
// 조건은 최초 한번 반복을 하고나서 따진다.

//[3]: 실습 --> 1~10까지 출력해보기

let j=1;
do{
  document.write(j+"<br>");
  j++;
}while(j<=10);