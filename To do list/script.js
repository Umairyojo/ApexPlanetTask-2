const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

document.getElementById("add-btn").addEventListener("click", addTask);
addEventListener("keydown", (e) => {
    if(e.key=="Enter"){
        addtask()
    }
})

function addTask() {
    if(inputBox.value == "") {
        alert("You must write something!!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;


        let span = document.createElement("span");
        span.innerHTML = "<i class='fa-solid fa-trash'></i>";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData()
}

// save data to local storage

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName.toUpperCase() === "LI"){
        e.target.classlist.toggle("checked")
        saveData()
    }else if(e.target.tagName.toUpperCase() === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }

    })

// fetch the data from local storage
    function showtask(){
        listContainer.innerHTML=localStorage.getItem("data")
    }
    showtask()