const helloDiv = document.getElementById("helloDiv")
const giveName = document.getElementById("giveName")
const nameButton = document.getElementById("nameButton");
const nameText = document.getElementById("nameText");

function usernameLocalStorage(){
    const user = nameText.value;
    localStorage.setItem("username", user);
    console.log("localstorage")
}

function usernameHello(){
    const username = localStorage.getItem("username");
    helloDiv.innerText = "Welcome back, " + username + "!";
}

function removeButton(){
    giveName.removeChild(nameButton);
}

function removeTextBox(){
    giveName.removeChild(nameText);
}

function nextHello(){
    const username = localStorage.getItem("username");
    helloDiv.innerText = "Welcome back, " + username + "!";
}

function firstAccess(){
    nameButton.addEventListener("click", usernameLocalStorage);
    nameButton.addEventListener("click", usernameHello);
    nameButton.addEventListener("click", removeButton);
    nameButton.addEventListener("click", removeTextBox);
}

function nextAccess(){
    nextHello()
    removeButton()
    removeTextBox();
}

firstAccess()
// The following if statement defines which of the above two functions will be executed, 
// depending on whether the user has used the app in this browser before or not
//if (localStorage.length == 0){
 //   firstAccess();
//} else if (localStorage.length == 1){
  //  nextAccess();
//} 