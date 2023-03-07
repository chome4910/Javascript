//반복문-break,continue

//[1]:용도
//break,continue 둘 다 반복문을 멈추고 빠져 나오는 역할을 수행한다.

//[2]: 차이점
//break  -->만나는 그 순간 반복문을 멈춘다.--> 완전 빠져나옴.
//continue -->만나는 그 순간 반복문을 멈춘다.--> 다음 반복을 계속해서 이어나간다.

//[3-1] : 실습1 (break)
/*
let i=0;
while(i<50){
    document.write(i+"<br>");
    i++;
    if(i==25){
        break;
    }
}
*/
//1~50까지 출력하다가,25가 되면 멈추게하기
//실제 출력은 25가 아니라 24가 된다. i++에서 i가 25가 되어 빠져나오기 때문



//[3-2] : 실습2
/*
while(true){
    let someValue=prompt("어떤 값을 입력해주세요");
    if(!someValue){
        break;
    }
    else{
        alert(`당신이 입력한 값은 =${someValue}입니다`);
    }
}
*/











//반복문-continue
//[1-1] : 실습  - continue
//1~100까지의 숫자중에서 홀수만 출력하시오
/*
for(let i = 1 ; i<=100 ; i++){
    if(i%2 == 0){               //i를 나눈 나머지가 0인 수는 2,4,6,8,10... 등의 짝수다 
        continue;               //짝수는 if의 조건에 부합하므로 continue를 만나 빠져나가게 된다.
    }
    document.write(i+"<br>");   //짝수는 if의 조건식에서 빠져나갔기 때문에 홀수만 document.write을 수행하게 된다.
}

*/


//1~100까지의 숫자중에서 짝수만 출력하시오
/*
for(let i = 1 ; i<=100 ; i++){
    if(i%2 == !0){               //i를 나눈 나머지가 0이 아닌수는 홀수
        continue;               //
    }
    document.write(i+"<br>");   //
}
*/

//1~100까지의 숫자중에서 짝수만 출력하시오 (짧은버전)
/*
for(let i = 1 ; i<=100 ; i++){
    if(i%2 == 0){    
        document.write(i + "<br>");                  
    }
}


















