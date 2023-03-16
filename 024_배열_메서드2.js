//[9] : slice() 메서드 --> 비교하여 splice()메서드
//slice,splice --> 둘은 비슷하나 큰 차이점이 있다. -->slice()메서드는 원본 배열을 수정하지x -->즉 새로운 배열을 리턴
//splice() --> 원본 배열을 수정한다.


//1. 기본사용법
//slice(start[,end])
//end 옵션이 중요한데 --> 지정한 end 전까지를 잘라냄(이게 중요하다.)

console.log
const animals2 =['tiger','alligator','elephant','dog','cat','sheep','hippo'];
//배열명.slice(1) --> 인덱스1부터 그 뒤의 값만 출력해라.
//배열명.slice(1,1) --> 지정한 인덱스 1을 포함하여 1(end-1)개 까지만 잘라내라.

const sliceAr=animals2.slice(1); 
console.log(sliceAr);
//여기서 1은 인덱스를 뜻하는데 animals2의 1번 인덱스는 alligator이므로 그값과 앞의 tiger가 삭제된다.
const sliceAr2=animals2.slice(1,2); 
console.log(sliceAr2);
//1번 인덱스 부터 시작(포함)하여 1개의 메세지까지만 출력하라는 뜻으로 alligator가 출력된다.


const sliceAr3=animals2.slice(1,1); 
//주의 (1,1)은 아무값도 출력하지 않는다. 이유는 뒤의 1에 -1을 하면 0이 되는데 0번 인덱스는 이미 시작점에서 지났기 때문이다


console.log(sliceAr2);


const sliceNums=[1,2,3,4,5,6,7,8,9,10];
const sliceNums2=sliceNums.slice(5);
console.log(sliceNums2);




//[10] : splice()메서드
//배열의 기존 요소를 삭제하거나 교체하고자 할 때 -->새로운 요소를 추가--> 배열의 값을 변경.
//특징1 -->원본을 수정
//특징2 -->잘라내고(삭제하고) 이어 붙이는 기능

//기본 사용법
//splice(__,__,__,__)
//splice(start,delete,item,item)으로 이해하면됨
console.clear();
console.log("-----------------------spice()");


//원본 배열
const oriAr10 =[1,2,3,4,5,6,7,8,9,10];
console.log(oriAr10);


//10-1
/*
console.log("-----------------------spice()10-1");
const spliceAr1=oriAr10.splice(5); 
console.log(spliceAr1); //6,7,8,9,10
console.log(oriAr10); //1,2,3,4,5  -->원본에 손상이 갔다.(slice와 큰 차이점)
*/


//10-2
/*
console.log("-----------------------spice()10-2");
const spliceAr2=oriAr10.splice(4,3);
console.log(spliceAr2); //5,6,7이 출력된다.
*/


//10-3
/*
console.log("------------------splice() 10-3");
const spliceAr3 = oriAr10.splice(3,2,'a','b','c');
console.log(spliceAr3);
console.log(`원본배열은 ${oriAr10} 입니다`);
console.log(`배열의 길이는 ${oriAr10[oriAr10.length-1]}`);
*/



//10-4
console.clear();
console.log("------------------splice() 10-4");
const oriStrings = ["홍길동","이순신","강감찬","김유신","임꺽정"];
console.log(oriStrings);
/*

const deleteString = oriStrings.splice(2,2,"세종대왕","을지문덕");
console.log(deleteString); //강감찬,김유신
console.log(oriStrings);//["홍길동","이순신","세종대왕","을지문덕","임꺽정"] 출력
*/


//마이너스 지정
/*
const orStrings2 = oriStrings.splice(-2);
console.log(orStrings2); // 김유신,임꺽정
console.log(oriStrings); //홍길동,이순신,강감찬
*/


//0 지정
const oriStrings3 = oriStrings.splice(3,0,'광개토대왕')
console.log(oriStrings3); // 지정한 인덱스 자리에 삭제하는 것 없이 --> 새로운 요소를 삽입한다.
console.log(oriStrings); //홍길동,이순신,강감찬,광개토대왕,김유신,임꺽정

