let upperCase = false;

function toUpperCaseButton(value){
    upperCase = !upperCase; //If variable-value is false, set to false and viceversa

    let allChars = document.getElementsByClassName("normal-key");
    for (let i = 0; i < allChars.length; i++) {
        if(upperCase) {
            document.getElementById("case-button").style.backgroundColor = "orange";
            allChars[i].style.textTransform = 'uppercase';
        } else {
            document.getElementById("case-button").style.backgroundColor = "white";
            allChars[i].style.textTransform = 'lowercase';
        }
    }
}

function newChar(value){
    if (upperCase) {
        value = value.toUpperCase();
        document.getElementById("message").innerHTML += value;
    } else{
        document.getElementById("message").innerHTML += value;
    }
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
            //if (currentMessage !== null)
            currentMessage = currentMessage.replace("<br>", "\n");
            let newPText = document.createTextNode(currentMessage);
            pText.appendChild(newPText);
            divMessageSent.appendChild(pText);

            //Building the timestamp
            let now = new Date();
            let timeNow = now.getHours() + ":" + now.getMinutes();
            let newTimeNow = document.createTextNode(timeNow);
            pTimestamp.appendChild(newTimeNow);
            divMessageSent.appendChild(pTimestamp);

            //TODO 4: Conditional required: just draw the day once.
            //Building the day of send
            const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
            let dateNow = now.getDate() + " de " + months[now.getMonth()];
            console.log(dateNow);

            //TODO 5: Send the content to he HTML
            //Building DOM order for elements
            document.getElementById("text-content").appendChild(divMessageSent);

            //Cleaning the input after sending message
            document.getElementById("message").innerHTML = "";
    }
}

// Function to scroll up automatically when new message is added
window.setInterval(function() {
    let elem = document.getElementById('text-content');
    elem.scrollTop = elem.scrollHeight;
});

function keyboardChange(keyboard){
    if(keyboard === "keyboard2"){
        document.getElementById("keyboard1").style.display = "none";
        document.getElementById("keyboard2").style.display = "flex";
    } else if (keyboard === "keyboard1"){
        document.getElementById("keyboard1").style.display = "flex";
        document.getElementById("keyboard2").style.display = "none";
    }
}