let inp = document.querySelectorAll(".inp input");
let bill = document.getElementById("bill");
let person = document.getElementById("person");
let amount = document.querySelector(".amount h1")
let total = document.querySelector(".total h1")
let percent = document.querySelectorAll(".percentBox div.percent")
let customPercent = document.getElementById("customPercent")
let reset  = document.getElementById("reset")
let onlyNum = /[^0-9.]/g
let percentValue=5,peopleValue=1,billValue=0;
inp.forEach((el)=>{
    el.addEventListener("input",(e)=>{
        e.target.value = e.target.value.replaceAll(onlyNum,"")

        // console.log(e.target.value);
    })
})
bill.oninput = (e)=>{
    billValue = e.target.value
    calc()
}
person.oninput = (e)=>{
    e.target.value = e.target.value.replaceAll(0,"")
    peopleValue = e.target.value
    calc()
}
// console.log(amount);
// console.log(total);
customPercent.onfocus = percentFunc
customPercent.oninput = percentFunc



function percentFunc(e){

    e.target.value = e.target.value.replaceAll(onlyNum,"")
    if(e.target.value ===""){
        percentValue = 0
    }else{
        percentValue = e.target.value
    }

    percent.forEach((ele)=>{
        ele.classList.remove("active")
    })
    e.target.classList.toggle("active")
    calc()
    
}
percent.forEach((el)=>{
    el.onclick = (e)=>{
        
        // console.log(e.target.dataset.percent);
        percent.forEach((ele)=>{
            ele.classList.remove("active")
        })
        el.classList.toggle("active")
        percentValue = e.target.dataset.percent
        calc()
    }

})
function calc() {
    if(peopleValue === ""){
        peopleValue = 1;
    }
    let per = (billValue*percentValue)/100
    amount.innerText = (per/peopleValue).toFixed(2)
    total.innerText = (billValue/peopleValue).toFixed(2)
    
}

reset.onclick = resetFunc
window.onload = resetFunc
function resetFunc() {
    inp.forEach((el)=>{
        el.value =""
    })
    percent.forEach((ele)=>{
        ele.classList.remove("active")
    })
    percent[0].classList.toggle("active")
    percentValue=5
    peopleValue=1
    billValue=0
    calc()
}


// console.log(inp);