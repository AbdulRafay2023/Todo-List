const inputBox =  document.querySelector('#input')
const listcontainer = document.querySelector('.listContainer')
const btn = document.querySelector('#btn')


//Add items list
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
    saveData();
})

//For checked and delete
listcontainer.addEventListener('click', (e)=>{
   if(e.target.tagName === "LI"){  // checked item
      e.target.classList.toggle("checked")
      saveData();
   }
   else if (e.target.tagName === "SPAN"){
      e.target.parentElement.remove();  //delete item
      saveData();
   }
},false)

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML)
}

function showData(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showData();