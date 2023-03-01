// var,let ,const


/* 변수의 타입 <string, number, boolean, null, undefined>*/
const name1 = `유니보리` /* string */
const age1 = 2 /* number */
const isfemale = true; /* boolean (true,false로 나타나는 값) */
const money = null; /* null (말 그대로 null 비어있는 값) */
const boyfriend = undefined;  /* 선언 자체가 안된것 */


/* 변수의 사용 */
const user2 =`june lee` /* string */
const age2 = 2 /* number */


console.log("제 이름은" + user2 + "이고, 나이는" + age2 + "살 입니다.") /* 과거의 사용 */
console.log(`제 이름은 ${user2}이고 "나이"는${age2}살 입니다. `) /* 최신의 사용 따옴표의 자유로운 사용 코드의 간편화 */


/* substring의 사용 */
const user3 =`june lee` /* string */
const age3 = 35 /* number */
console.log(user3.substring(0,4).toUpperCase()); 
/* june lee의 이름을 0번부터 4번까지 자른 후 toUpperCase로 대문자로 바꾸어 줄 수 있다. 소문자는 toLowerCase */


/* split의 사용 
글자를 어떠한 기준으로 잘라주는 역할을 한다.*/
const user4 =`june lee` /* string */
const age4 = 2 /* number */
console.log(user4.split(" ")) /* 따옴표안에 기준을 잡아주면 된다. 그 기준으로 잘림.이거처럼 아무것도 안쓰면 한글자씩 짤림 */

/* split의 응용1 */
const hobbies = ["game","programming","tv","youtube"];
console.log(hobbies) /* "game","programming","tv","youtube" 으로 출력된다. */
console.log(hobbies.join()) /* game,programming,tv,youtube 으로 출력된다.  */
console.log(hobbies.join().split(",")) /* "game","programming","tv","youtube" 으로 출력된다. */

/* split의 응용2 */
const homework ="eng,kor,math,history"
console.log(homework.split(",")) /* 'eng', 'kor', 'math', 'history' 으로 출력된다. */
console.log(homework.split(",")[0]) /* eng만 출력된다.0번째 단어이기 때문 */

