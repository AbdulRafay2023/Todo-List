const inputBox =  document.querySelector('#input')
const listcontainer = document.querySelector('.listContainer')
const btn = document.querySelector('#btn')


//Function for add item
function addItem(){
    if(inputBox.value === ''){
        alert("plz enter item name")
    }
    else{
        let li = document.createElement("li")
        li.innerText = inputBox.value
        listcontainer.append(li)

        let span = document.createElement("span")
        span.innerText = "x"
        li.append(span)

        inputBox.value = ''
        saveData();
    }
}
btn.addEventListener('click', addItem)
inputBox.addEventListener('keydown', (e)=>{
    if(e.key === "Enter"){
     addItem();
    }
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