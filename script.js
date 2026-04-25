const inputBox =  document.querySelector('#input')
const listcontainer = document.querySelector('.listContainer')
const btn = document.querySelector('#btn')

btn.addEventListener('click', ()=>{
if(inputBox.value === ''){
        alert('Type something!')
    }
    else{
       let li = document.createElement("li");
       li.innerText = inputBox.value
       listcontainer.append(li);
       let span= document.createElement("span")
       span.innerHTML = "x";
       li.appendChild(span)
    }
    inputBox.value = ''
})