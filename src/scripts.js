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

    //Creating main containers and elements for HTML
    let divMessageSent = document.createElement("div").classList.add("message-sent");
    let pText = document.createElement("p").classList.add("text");
    let pTimestamp = document.createElement("p").classList.add("timestamp");

    //Building the text message
    let currentMessage = document.getElementById("message").innerHTML;
    let newPText = document.createTextNode(currentMessage);
    pText.appendChild(newPText);
    divMessageSent.appendChild(pText);

    //Building the timestamp
    let now = new Date();
    let timeNow = now.getHours() + ":" + now.getMinutes();
    pTimestamp.appendChild(timeNow);
    divMessageSent.appendChild(pTimestamp);

    //Building the day of send
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let dateNow = now.getDate() + " de " +  months[now.getMonth()];

    //Building DOM order for elements
    document.getElementById("text-content").appendChild(divMessageSent);


}

