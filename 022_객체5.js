// 객체 (Object) - 객체내 객체 만들기

//[1] : 객체의 멤버는 다양한 타입을 가질 수 있다.
//따라서,처음에 만든 객체에 또 다른 객체를 만들어서 사용할 수 있다. -->중첩

//[2] : 실습
/*
const person ={
    name : `홍길동`,
    age : 20,
    
    credits : {
        english:90,
        math:50,
        philosophy:100,
    }                           //객체안에 또다른 객채를 넣어 만들 수 있다.
        
};
*/


//[3] : 중첩된 객체를 참조할 때는 -->점(.)연산자를 두 번 연속해서 사용하면 된다.
/*
alert(`반갑습니다 ${person.name}[${person.age}]회원님 ~ 성적은 다음과 같습니다.`);
document.write(`영어 점수는 ${person.credits.english} 입니다.<br>
                수학 점수는 ${person.credits.math} 입니다.<br>
                철학 점수는 ${person.credits.philosophy} 입니다.`);


*/
                


//객체 (Object) - 객체내 함수 만들기
//[1] : 객체의 멤버는 다양한 타입을 가질 수 있다.
//따라서,처음에 만든 객체에 함수를 만들어 넣을 수도 있다.-->이때, 객체내의 포함된 함수 -->메서드(Method)
//그럼 name,age는 뭐라고 부르는가?-->속성(Property) -->헷갈리면 '특성','특징'정도로 생각하기


//[2] : 객체의 주요 구성요소
//속성  -->  객체의 주요 특성(특징)을 정의.
//메서드 --> 객체의 어떤 동작이나 처리를 구현 담당.



//[3] : 실습

let person ={
    name : `홍길동`,


    age : 20,
    
    credits : {
        english:90,
        math:50,
    },
    
    //함수 추가
    showMessage : function(){
        alert(`안녕하세요 제 이름은 ${person.name}입니다. 나이는 ${person.age}살입니다.`);
        //                          ->이렇게 작성하는것은 지양한다.(person.name)
    },
        
};

person.showMessage();




//[4] : (문제) 객체끼리 할당 후 person 객체를 null주면?
let mankind = person; // 새로운 mankind 변수에 person 할당해줌
mankind.showMessage(); //값이 잘 작동한다.

person = null; // null -->값을 없애 준다. 이때 호출하게 되면


