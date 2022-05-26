const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]


const candles = document.querySelectorAll(".candle")  
let larger_amount = 0
let larger_amount_day

for (let i in data){
    if(data[i].amount > larger_amount){
        larger_amount = data[i].amount
        larger_amount_day = data[i].day
    }
}


candles.forEach(candle =>{

    candle.parentElement.children[0].textContent = "$" + data[candle.parentElement.id].amount
    candle.parentElement.children[0].style.margin = data[candle.parentElement.id].amount * 3 + 40 + "px"
    candle.style.height = data[candle.parentElement.id].amount * 3 + "px"

    if(candle.parentElement.children[2].textContent == larger_amount_day){
        candle.classList.add("highlight")
    } else {
        candle.classList.remove("highlight")
    }

    candle.addEventListener("mouseover", function(){
        candle.classList.add("candle_hover")
        candle.parentElement.children[0].classList.remove("hide") 

        if(candle.classList.contains("highlight")){
            candle.classList.add("highlight_hover")
        }
    })

    candle.addEventListener("mouseleave", function(){
        candle.classList.remove("candle_hover")
        candle.parentElement.children[0].classList.add("hide")

        if(candle.classList.contains("highlight")){
            candle.classList.remove("highlight_hover")
        }
    })

})
