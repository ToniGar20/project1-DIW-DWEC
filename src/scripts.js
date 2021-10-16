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
    let currentMessageValue = document.getElementById("message").innerHTML
    if (currentMessageValue.length >= 1){
        let newChain = currentMessageValue.split("");
        newChain.pop();
        document.getElementById("message").innerHTML = newChain.join("");
    } else {
        return;
    }
}

function deleteAllChars(){

}