// 함수 - 기초 연습문제

//[1] : 로그인한 각 유저에게 "홍길동 회원님 등교하셨습니다." 라고
//출력하는 함수를 만들어보시오.

//이 때, 이름에 해당하는 부분이 매개변수가 될 것임을 미리 예상해야한다.

// function showMessage(name){

//     const msg=`${name} 회원님 등교하셨습니다.`;
//     alert(msg);
// }

// showMessage("유니");
// showMessage("보리");


//[2] : showMessage(); -->이렇게 함수가 호출되면 어떻게 되나요?
//showMessage(); // undefined -->뭔가 해결책이 필요하다.

/*
function showMessage(name){

    let msg=`${name} 회원님 등교하셨습니다.`;
    if(name){
        alert(msg);
    }
    else{
        alert("회원님의 이름 정보가 없습니다.")
    }
}

showMessage("유니");
showMessage("보리");
showMessage(null);
*/




//[3] : else 절을 굳이 꼭 작성해야 하는가?
/*

function showMessage(name){

    let msg=`회원님 등교하셨습니다.`;
    if(name){
        msg=`${name}${msg}`         //msg의 값이 바뀌는 시점
    }

    alert(msg);
}

showMessage("유니");
showMessage(null);
*/



//[4] : +=사용하여 작성한다면?
// function showMessage(name){

//     let msg=`열공하세요~`;
//     if(name){
//         msg += `${name}님`;
//     }

//     alert(msg);
// }


// showMessage("유니");





// function loginMessage(user){
//     let massage=`어서오세요 ${user}회원님^_^/ 로그인포인트 300점을 획득하셨습니다.`
//     if(user){
//         alert(massage);
//     }
//     else{
//         alert('누구세요 나가세요');
//     }
// }

// loginMessage(`유니`);





// function loginMessage(){
//     let message=prompt(`회원님의 이름을 입력해주세요`);
//     if(message){
//         return (`어서오세요 ${message}회원님^_^/ 로그인포인트 300점을 획득하셨습니다.`);
//     }
//     else{
//         return('누구세요 나가세요');
//     }
// }

// alert(loginMessage());



function loginMessage2(user2){
    let boo=`반갑습니다`
    if(user2){
        boo += `${user2} 회원님 어서오세요~`
    }
    return boo;
}


alert(loginMessage2(""));
