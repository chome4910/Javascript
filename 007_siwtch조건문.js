//switch 조건문

//[1]:특징
//if .. else 조건문 ==>조건문이 불리언 값으로 평가
//switch 조건문 ==>평가==>어떤 숫자 값 또는 문자(열) 값.
//여러가지 평가에 따른 분기 처리를 하고자 할 때 ==>switch 조건문 사용==>사용자 메뉴 처리 등

//[2]:사용법
/*
const number=prompt(`숫자 1,2,3,중에서 하나를 입력하세요`);
//사용자 입력을 받아서 처리를 하게될 때 number가 아닌 string으로 취급이 된다.
switch(number){

    //분기 처리할일 -->return
    case `1`:
        alert(1);
        break;//break를 만나면 이하는 더 이상 비교하지 않고 switch문 종료.
    case `2`:
        alert(2);
        break;
    case `3`:
        alert(3);
        break;
    default:
        alert(`범위를 벗어났습니다.`); //이도저도 아니면 기본값으로 저장.생략도 가능하다
        break;
}
*/
//[3] 사용법2
/*
function testSwitch(v){
    //출력 변수
    let result = "";

    //switch 조건문
    switch(v){
        //할 일 처리 -->return
        case "korea":
            result="한국"
            break;
        case "usa":
            result="미국"
            break;
        case "china":
            result="중국"
            break;
        default:
            result="영어로 'korea','usa','china'중 한나라를 입력해주세요"
            break;
    }
    return result;
}
alert(testSwitch("korea")); //한국으로 출력
alert(testSwitch("4")); //영어로 'korea','usa','china'중 한나라를 입력해주세요 라고 출력
*/

//조건 처리가 많은 if문 -->switch문이 더 깔끔할 수 있다.

//[1]:실습
/*
function manyCondition(){
    const age=prompt(`연령대를 입력하세요!`);//연령대로만 입력받는다-->10,20,30,40
    if(!age){ // age에 number가 아닌 다른값이 왔을 때 작동
        return `정확한 연령대를 숫자로 입력해주세요`; //esc나 취소버튼을 누를시 null값이 날아가기 때문에 작성해줌
    }
    else{
        return `코드 작성`;
    }
}
alert (manyCondition());


*/
//[2]if문을 사용한 연령대별 분기처리
/*
function manyCondition(){
    const age=prompt(`연령대를 입력하세요!`);//연령대로만 입력받는다-->10,20,30,40
    if(!age){ // age에 number가 아닌 다른값이 왔을 때 작동
        return `정확한 연령대를 숫자로 입력해주세요`; //esc나 취소버튼을 누를시 null값이 날아가기 때문에 작성해줌
    }
    else{
        let result="";
        if(age==="10"){
            result ="10대를 위한 미팅은 A코너입니다.";
        }
        else if(age==="20"){
            result ="20대를 위한 미팅은 B코너입니다.";
        }
        else if(age==="30"){
            result ="30대를 위한 미팅은 C코너입니다.";
        }
        else{
            result ="기타연령대를 위한 미팅은 D코너입니다.";
        }
        return result;
    }
}
alert (manyCondition());
*/

//[3]switch문을 사용한 실습
/*
function manyCondition2(){
    const age=prompt(`연령대를 입력하세요!`);//연령대로만 입력받는다-->10,20,30,40
    if(!age){ // age에 number가 아닌 다른값이 왔을 때 작동
        return `정확한 연령대를 숫자로 입력해주세요`; //esc나 취소버튼을 누를시 null값이 날아가기 때문에 작성해줌
    }
    else{
        let result="";
        switch(age){
            case '10':
                result = "10대를 위한 미팅은 A 코너입니다."
                break
            case '20':
                result = "20대를 위한 미팅은 B 코너입니다."
                break
            case '30':
                result = "30대를 위한 미팅은 C 코너입니다."
                break
            default :
                result = "기타 연령대를 위한 미팅은 D 코너입니다."
                break
        }
        return result;
    }
}
alert(manyCondition2());
*/



/*  안보고 따라써보기
function mittingAge(){
    const userAge = prompt("미팅을 시작하겠습니다. 연령대를 입력해주세요",'10,20,30등등 숫자만 입력해주세요')
    if(!userAge){
        return "올바른 값을 입력해주세요"
    }
    else{
        let age=""; //무언가를 입력했을때 --> 나올문구 출력하는 변수지정
        switch(userAge){
            case "10" :
                age="10대를 위한 미팅장소는 A구역입니다.";
                break;
            case "20": 
                age="20대를 위한 미팅장소는 B구역입니다.";
                break;
            case "30": 
                age="30대를 위한 미팅장소는 C구역입니다.";
                break;
            default :
                age="기타연령대를 위한 미팅장소는 D구역입니다."
        }
        return age;
    }
}
alert(mittingAge());
*/