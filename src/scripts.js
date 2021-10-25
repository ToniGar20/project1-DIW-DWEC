let upperCase = false;
let typeOfClick;

function toUpperCaseButton(value){
    upperCase = !upperCase; //If variable-value is false, set to false and viceversa
    value === "single" ? typeOfClick = "single" : typeOfClick = "double";

    let allChars = document.getElementsByClassName("normal-key");
    for (let i = 0; i < allChars.length; i++) {
        if(upperCase) {
            allChars[i].style.textTransform = 'uppercase';
            if (typeOfClick === "single"){
                document.getElementById("case-button").style.backgroundColor = "rgb(255,228,181)";
            } else {
                document.getElementById("case-button").style.backgroundColor = "orange";
            }
        } else {
            allChars[i].style.textTransform = 'lowercase';
            document.getElementById("case-button").style.backgroundColor = "rgb(77,182,172)";
        }
    }
    return typeOfClick;
}

function newChar(value){
    if (upperCase) {
        value = value.toUpperCase();
        document.getElementById("message").innerHTML += value;
        if (typeOfClick === "single"){
            document.getElementById("case-button").style.backgroundColor = "rgb(77,182,172)";
            let allChars = document.getElementsByClassName("normal-key");
            for (let i = 0; i < allChars.length; i++){
                allChars[i].style.textTransform = 'lowercase';
            }
            upperCase = false;
        } else {
            upperCase = true;
        }
    } else{
        document.getElementById("message").innerHTML += value;
    }
    return upperCase;
}

function deleteFirstChar(){
    let currentMessageValue = document.getElementById("message").innerHTML;
    if (currentMessageValue.length >= 1){
        let newChain = currentMessageValue.split("");
        newChain.shift();
        document.getElementById("message").innerHTML = newChain.join("");
    }
}

function deleteLastChar(){
    let currentMessageValue = document.getElementById("message").innerHTML;
    if (currentMessageValue.length >= 1){
        let newChain = currentMessageValue.split("");
        newChain.pop();
        document.getElementById("message").innerHTML = newChain.join("");
    }
}

function deleteLastWord(){
    let currentMessageValue = document.getElementById("message").innerHTML;
    if (currentMessageValue.length >= 1){
        let newChain = currentMessageValue.split(" ");
        newChain.pop();
        document.getElementById("message").innerHTML = newChain.join(" ");
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
    let divMessageSent = document.createElement("div");
    divMessageSent.classList.add("message-sent");
    let pText = document.createElement("p");
    pText.classList.add("text");
    let pTimestamp = document.createElement("p");
    pTimestamp.classList.add("timestamp");

    //Building the text message
    let currentMessage = document.getElementById("message").innerHTML;
    if (currentMessage !== '') {
        currentMessage = currentMessage.replaceAll("<br>", "\n");
        let newPText = document.createTextNode(currentMessage);
        pText.appendChild(newPText);
        divMessageSent.appendChild(pText);

        //Building the timestamp
        let now = new Date();
        let minutesFixed;
        if(now.getMinutes() >= 0 && now.getMinutes() <= 9){
            minutesFixed = "0" + now.getMinutes();
            } else{
            minutesFixed = now.getMinutes();
        }
        let timeNow = now.getHours() + ":" + minutesFixed;
        let newTimeNow = document.createTextNode(timeNow);
        pTimestamp.appendChild(newTimeNow);
        divMessageSent.appendChild(pTimestamp);

        //Building the day of send just if it doesn't exists!
        const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        let dateNow = now.getDate() + " de " + months[now.getMonth()];
        let datesDisplayed = document.getElementsByClassName("day");
        console.log(dateNow);
        console.log(datesDisplayed);

        if(datesDisplayed[datesDisplayed.length-1].innerText !== dateNow){
            let newDate = document.createTextNode(dateNow);
            let divForDate = document.createElement("div");
            divForDate.classList.add("day");
            divForDate.appendChild(newDate);
            let divForDayBox = document.createElement("div");
            divForDayBox.classList.add("day-box");
            divForDayBox.appendChild(divForDate);
            document.getElementById("text-content").appendChild(divForDayBox);
        }

        //Building DOM order for elements
        document.getElementById("text-content").appendChild(divMessageSent);

        //Cleaning the input after sending message
        document.getElementById("message").innerHTML = "";
    }
}

function keyboardChange(keyboard){
    if(keyboard === "keyboard1"){
        document.getElementById("keyboard1").style.display = "flex";
        document.getElementById("keyboard2").style.display = "none";
        document.getElementById("keyboard3").style.display = "none";
    } else if (keyboard === "keyboard2"){
        document.getElementById("keyboard1").style.display = "none";
        document.getElementById("keyboard2").style.display = "flex";
        document.getElementById("keyboard3").style.display = "none";
    } else if (keyboard === "keyboard3"){
        document.getElementById("keyboard1").style.display = "none";
        document.getElementById("keyboard2").style.display = "none";
        document.getElementById("keyboard3").style.display = "flex";
    }
}

// Function to scroll up automatically when new message is added
window.setInterval(function() {
    let elem = document.getElementById('text-content');
    elem.scrollTop = elem.scrollHeight;
});
