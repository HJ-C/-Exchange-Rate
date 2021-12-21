// 1. 박스 2개 만들기
// 2. 드랍다운 리스트 만들기
// 3. 환율정보 가져오기

// 4. 드랍다운 리스트에서 아이템 선택하면 아이템변경
// 5. 금액을 입력하면 환전이 된다
// 6. 드랍다운 리스트에서 아이템 선택하면 다시 그 단위 기준으로 환전이됨
// 7. 숫자를 한국어로 읽는법
// 8. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이된다.

let currencyRatio = {
    USD:{
        KRW:1192.28,
        USD:1,
        VND:22900.00,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00084,
        VND:19.21,
        unit:'원'
    },
    VND:{
        KRW:0.052,
        USD:0.000044,
        VND:1 ,
        unit:"동"
    }
}

let fromCurrency ="USD"

document.querySelectorAll('#from-currenct-list a').forEach((menu => {
    menu.addEventListener('click', function(){
        // 1. 버튼 가져오기
        // 2. 버튼에 값을 바꾼다
        document.getElementById('from-button').textContent=this.textContent
        // 3. 선택된 currency값을 변수에 저장해준다
        fromCurrency = this.textContent
        console.log(fromCurrency)
    })
}))

document.querySelectorAll('#to-currenct-list a').forEach((menu=>{
    menu.addEventListener('click', function(){
        document.getElementById('to-button').textContent = this.textContent
        fromCurrency = this.textContent
        console.log(fromCurrency)
    })
}))