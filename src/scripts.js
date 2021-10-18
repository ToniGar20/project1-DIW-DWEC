let upperCase = false;
function toUpperCaseButton(){
    if(upperCase){
        upperCase = false;
    } else {
        upperCase = true;
    }

    let allChars = document.getElementsByClassName("normal-key");
    for (let i = 0; i < allChars.length; i++) {
        if(upperCase) {
            allChars[i].style.textTransform = 'uppercase';
            upperCase = true;
        } else {
            allChars[i].style.textTransform = 'lowercase';
            upperCase = false;
        }
    }
    return upperCase;
}

function newChar(value){
    if(upperCase) {
        value = value.toUpperCase();
        document.getElementById("message").innerHTML += value;
    } else{
        document.getElementById("message").innerHTML += value;
    }
}

function deleteLastChar(){
    let currentMessageValue = document.getElementById("message").innerHTML;
    if (currentMessageValue.length >= 1){
        let newChain = currentMessageValue.split("");
        newChain.pop();
        document.getElementById("message").innerHTML = newChain.join("");
    } else {
        return;
    }
}

function deleteAllChars(){
    document.getElementById("message").innerHTML = "";
}

function addLineBreak(){
    document.getElementById("message").innerHTML += `</br>`;
}

function sendMessage(){
    // Building the message
    let currentMessage = document.getElementById("message").innerHTML;
    let newDivContent = document.createTextNode(currentMessage);
    let newDiv = document.createElement("div")
    newDiv.classList.add("message-sent");
    newDiv.appendChild(newDivContent);
    document.getElementById("text-content").appendChild(newDiv);
    document.getElementById("message").innerHTML = "";

    //Building the timestamp
    let now = new Date();
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let dateNow = now.getDate() + " de " +  months[now.getMonth()];
    let timeNow = now.getHours() + ":" + now.getMinutes();



}

