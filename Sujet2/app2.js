const inputCase = document.getElementById("input-case");
const listeTaches = document.getElementById("liste-taches");

function ajouterTache() {
  if (inputCase.value === '') {
    alert("Vous devez entrer une tâche !");
  } else {
    let li = document.createElement("li");
    li.textContent = inputCase.value;
    listeTaches.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputCase.value = ""
  sauvegarde()  ;
}

listeTaches.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checker")
        sauvegarde()
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        sauvegarde()
    }
}, false);

function sauvegarde(){
    localStorage.setItem("data", listeTaches.innerHTML)
}

function montrerTaches(){
    listeTaches.innerHTML = localStorage.getItem("data")
}
montrerTaches()