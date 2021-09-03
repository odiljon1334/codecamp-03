//7.반복문(연습문제)
//숫ㅏ 더 하기

function sum(num) {
    let count = 0;
    for (let i = 1; i <= num; i = i + 1){

        count = count + i;
        console.log(count);
    }
    
}

// 조건문 실전 적용-점수 따른 등급

function grade(score) {
    function grade (score){
    if (score > 100 || score < 0 ){
    console.log("잘못된 점수입니다");
    }else if (score >= 90){
        console.log("A");
    }else if (sore >= 80){
        console.log("B");
    }else if (score >= 70){
        console.log("C");
    }else if (score >=60){
        console.log("D");
    }else if (score <=50){
        console.log("F");
        


    
}

//마이페이지

const myShopping = [
    { category: "과일", price: 12000 },
    { category: "의류", price: 10000 },
    { category: "의류", price: 20000 },
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000 },
    { category: "의류", price: 10000 },
    { category: "과일", price: 8000 },
    {category:"", price: 8000},
]
let count = 0; //물품을 구매한 흿수를 담아주는 변수
let price = 0; //총 가격을 담아주는 변수 
let grade = ''; // 


for (let i = 0; i < myShopping.length; i = i + 1){
    if (myShopping[i].category === '의류') {
        count = count + 1;
        price = price + myshopping[i].category === '의류';

        if (count >= 0 && count <= 2) {
            //bronze 
            grade = 'bronza';
    
        } else if (count >= 3 && count <= 4) {
            //sliver;
            grade = 'sliver';
        } else if (count >= 5) {
            
        }
    }
    console.log('의류를 구매한 흿수는 총 ' + count '회 금액은' + price + '원이며 등급은' +grade +'얍니다.')
    
}