// 객체(Object) - 객체 vs 연관 배열

//[1] : 자바스크립트 객체 --> 멤버이름인 키(key)를 가지고 값을 서치 -->연관 배열
//연관 배열 -->어떤 키 하나와 값 하나가 서로 연관되어 있으면 이 키를 통해서 연관되어 있는 값을 찾는 것.
//멤버 이름 --> key --> 내부적으로 문자열 형태로 처리 --> key(멤버 이름)에 대한 문자열 조립도 가능 -->


//[2] : 실습
let person_name ={
    person1 : `홍길동`,
    person2 : `이순신`,
    person3 : `강감찬`,
    person4 : `을지문덕`,
    person5 : `세종대왕`,
};

for(let i=1 ; i<=5 ; i++){
    document.write(`${i}번째 사람의 이름은 = ${person_name["person"+i]}입니다.<br>`);
}

//이렇게하면 실행중에 문자열을 조립하여 멤버를 참조할 수도 있다.

const myFamily={
    member1 : `수진`,
    member2 : `유니`,
    member3 : `보리`,
};

for(let i = 1 ; i<=3  ; i++){
    document.write(`우리가족중 ${i}번째 멤버는 ${myFamily[`member`+i]}입니다<br>`);
}

