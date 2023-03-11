//함수 - 디폴트 매개변수 값
//매개변수(인자) 값을 받는 함수에서 매개변수 값이 없는 경우-->디폴트로 값을 지정할 수 있다.
//(문제) ID를 매개변수로 받는 함수에서 ID가 없는 경우 디폴트 값을 Guest로 지정하는 함수를 만들어보시오

//[1] :or 연산자를 사용
/*
function testFunc(id){

    let user_id= id || 'Guest'; // or 연산자 특징 --> 피연산자 둘(id와 Guest)중 하나가 참이면 참이다.
    let greeting = `반갑습니다 ${user_id}님`;
    alert(greeting);
    console.log(greeting);
}

testFunc2('홍길동');
*/



//여기서 id를 제대로 입력하면 id값이 출력되고
//id값이 제대로 입력되지 않은 null,undefined같은 경우는 guest가 출력된다.



//[2]
/*
function testFunc2(id='Guest'){ //여기서 = 표시는 같다는 표시가 아니라 or의 표시이다

    let greeting = `반갑습니다 ${id}님`;
    alert(greeting);
    console.log(greeting);
}

testFunc2('');
*/

/*
function add(a,b){
    let sum=a+b;
    alert(sum);
}

add(10,20);
*/

