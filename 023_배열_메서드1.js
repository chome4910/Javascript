//배열 사용시 몰라서는 안되는 유용한 메서드


//[1] : 객체 vs 배열 --> 비슷하면서도 다르다.
//객체-->특성(특징)들을 묶어줄 수 있고, 해당 객체의 동작(메서드)도 정의해서 묶어줄 수 있다.
//배열-->일반적으로 같은 타입의 객체들을 묶는게 일반적 --> JS,Python 등의 동적 타입 언어들은-->타입에 상관없이 바구니(배열)에 담을수 있다.


//[2] : 타입에 상관없이 여러 종류의 타입을 바구니(배열)에 담는게 유용한가?
//일반적으로 권장하지 않고, 속도가 느리다.
//그럼에도 불구하고, 편리성 때문에 동적 타입 언어들에서는 이러한 식으로 자유롭게 타입에 상관없이 담을 수 있도록 한다.
//속도를 중요시하는 연산에서는 예를 들면, 넘파이 같은데서는 파이썬의 이러한 특징 대신에 한 타입만을 담아서 처리한다. -->속도 때문에.


//[3] : 실습
const ar = new Array();
//ar=[1,2,3]; //ar이 const로 선언되어있기 때문에 이렇게 작성할 시 오류가 난다.(상수이기 떄문에 값 변경 불가능)
//ar의 값을 변경하고 싶다면 const->let으로 변경하거나, 메서드를 이용하여 값을 변경해준다.
ar.push(1); //배열 맨 뒤에 1이라는 값 추가
ar.push(2);
ar.push(`korea`); 
console.log(ar);


let ar2=[1,2,3,4,5]
console.log(ar2);



//[4] : 처음과 끝
console.clear();
const animals =['tiger','alligator','elephant','dog','cat','sheep','hippo']; //동물 배열 만들어주기
console.log(animals); // 배열 animals에 있는 모든 값 출력
console.log(animals[0]); // tiger 출력
console.log(animals[4]); // hippo - cat
console.log(animals[animals.length-1]);


//[5] : undefined 값을 가지는 경우는?? -->인덱스 범위를 벗어나는 경우.
console.clear();
console.log(animals[5]); //sheep
console.log(animals[7]); //undefined
console.log(animals['tiger']); //undefined 인덱스 처럼 사용하면 undefined가 출력된다.


//[6] : 반복과 출력
//1. 전통적인 for 반목문    2. for..in,for..of 반복문    3. forEach()메서드    4. Spread Operator

//1.for 
const animals2 =['tiger','alligator','elephant','dog','cat','sheep','hippo'];
for(let i = 0 ; i <animals2.length;i++){
    console.log(i);
};

console.clear();



//2. fon....in
console.log('-------------------------------------------for..in')
for(let i in animals2){
    console.log(i); // index -->0,1,2,3,4,5,6
}



//3. fon....of
console.log('-------------------------------------------for..of')
for(let i of animals2){
    console.log(i); // value
}


//[7] : 삽입과 삭제
//push(),pop()      --> 배열의 맨뒤에서 동작한다.push 추가 pop 삭제
//unshift(),shift()     -->

let a=[1,2,3,4,5];
a.unshift("1~5세보기 시작!");
console.log(a);

a.pop(); //아무 값 안넣어도됨
console.log(a);

console.clear()
a.shift(); 
console.log(a);

//[8] : split() 메서드
//기능 --> 문자열을 배열로 리턴 --> 즉,문자열에서 특정한 구분자를 기준으로 잘라내서 새로운 배열을 리턴.
//사용 --> 문자열.split(separator.limit)
//a.split(x,y);     ---> x를 기준으로 글자를 자르고, y갯수 만큼의 단어를 출력하라.

console.clear();
console.log('---------split()1');
let someStr = "진도는 한국에서 제주도와 거제도 다음으로 큰 섬이다.";
let splitted = someStr.split("",3); // 결과값을 담아줄 변수 지정 --> split을 사용하여 ""부터 3개의 배열을 출력한다.
console.log(splitted);


console.log('---------split()2');
let someStr2 = "진도,제주도,거제도,독도,마라도";
let splitted2 = someStr2.split(",",4); // 결과값을 담아줄 변수 지정 --> split을 사용하여 ,를 기준으로 단어를 끊는데, 4개의 글자를 출력한다.
console.log(splitted2);

console.log('---------split()3');
let someStr3 = "진도,제주도,거제도,독도,마라도";
let splitted3 = someStr3.split(","); // 분할 갯수 옵션이 지정되지 않으면 문자열 전부를 잘라서 배열로 리턴한다
console.log(splitted3);
console.log(splitted3.length); //5
console.log(splitted3[splitted3.length-1]); //마라도

