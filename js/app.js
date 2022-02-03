const btn = document.querySelector('button')
const inp = document.querySelector('input')
const newUl = document.querySelector('ul')
const resetBtn = document.querySelector('#reset-button')


btn.addEventListener('click',function(evt){
  const newLi = document.createElement('li')
  newLi.textContent = inp.value
  if(inp.value !==' '){
    document.querySelector('ul').appendChild(newLi)
    inp.value=''
  }
})
resetBtn.addEventListener('click',function(evt){
  newUl.innerHTML = ''
  inp.value=''
})