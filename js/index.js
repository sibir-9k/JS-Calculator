const number = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const prevOperand = document.getElementsByClassName('previous-operand')
const currentOperand = document.getElementsByClassName('current-operand')

for(let elem of number){
  elem.addEventListener('click', function(e){
    console.log(e.target.innerText)
  })
}
