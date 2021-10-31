/** 10 functions defined for different events on the HTML **/

//Variables to control upperCase button while new characters are typed with the keyboard
let upperCase = false;
let typeOfClick;

/**
 * 1. toUpperCaseButton - function related to the upperCase display and send values when a new character will be added.
 * @param value
 * @returns {string}
 */
function toUpperCaseButton(value) {
    upperCase = !upperCase; //If variable-value is false, set to false and viceversa
    value === "single" ? typeOfClick = "single" : typeOfClick = "double";

    // Function to change button letters when UpperCase is required
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
    // Returning the value "tpyeOfClick to know if UpperCase is active for adding newChar"
    return typeOfClick;
}


/**
 * 2. newChar - function that adds to the text-box-writing area the value that is typed on the keyboard.
 * @param value
 * @returns {boolean}
 */
function newChar(value) {
    if (upperCase) { //If uppercase from the first function, character displayed with "Mays."
        value = value.toUpperCase();
        document.getElementById("message").innerHTML += value;
        if (typeOfClick === "single") { //If it was a single click, upperCase value changes to false, and the keyboard gets lowercase style
            document.getElementById("case-button").style.backgroundColor = "rgb(77,182,172)";
            let allChars = document.getElementsByClassName("normal-key");
            for (let i = 0; i < allChars.length; i++) {
                allChars[i].style.textTransform = 'lowercase';
            }
            upperCase = false;
        } else { //Otherwise, keyboard remains "upperCased"
            upperCase = true;
        }
    } else { //Each value added to the message wrote
        document.getElementById("message").innerHTML += value;
    }
    return upperCase;
}

/**
 * 3. deleteFirstChar - Current message splitted into and array, deleting first item if length of message >= 1
 */
function deleteFirstChar() {
    let currentMessageValue = document.getElementById("message").innerHTML;
    if (currentMessageValue.length >= 1) {
        let newChain = currentMessageValue.split("");
        newChain.shift();
        document.getElementById("message").innerHTML = newChain.join("");
    }
}

/**
 * 4. deleteLastChar - Current message splitted into andarray, poping the last item if length of message >= 1
 */
function deleteLastChar() {
    let currentMessageValue = document.getElementById("message").innerHTML;
    if (currentMessageValue.length >= 1) {
        let newChain = currentMessageValue.split("");
        newChain.pop();
        document.getElementById("message").innerHTML = newChain.join("");
    }
}

/**
 * 5. deleteLastWord - Current message splitted into an array, poping the last Word (split by " ") if length of message >= 1
 */
function deleteLastWord() {
    let currentMessageValue = document.getElementById("message").innerHTML;
    if (currentMessageValue.length >= 1) {
        let newChain = currentMessageValue.split(" ");
        newChain.pop();
        document.getElementById("message").innerHTML = newChain.join(" ");
    }
}

/**
 * 6. deleteAllChars - Current message value is set to "nothing"
 */
function deleteAllChars() {
    document.getElementById("message").innerHTML = "";
}

/**
 * 7. addLineBreak - Current message adds a "<br>"
 */
function addLineBreak() {
    document.getElementById("message").innerHTML += '<br>';
}

/**
 * 8. sendMessage - Function to send the current message to the display-message-area. Large function with the following scope:
 *  a) Building containers/elements/boxes to fit the DOM/CSS requirements
 *  b) Build of the box for the text message
 *  c) Build of the timestamp and his boxes
 *  d) Building the day of sent in case it doesn't have been displayed before
 *  e) DOM send of the structure
 *  f) Injecting the current message into the build structure as last step to avoid errors with JS processing (see README.md /Highlights & Lowlights/)
 */
function sendMessage() {
    //Creating main containers and elements for HTML. Note: I don't build a TextNode for now
    let divMessageSent = document.createElement("div");
    divMessageSent.classList.add("message-sent");
    let pText = document.createElement("p");
    pText.classList.add("text");
    let pTimestamp = document.createElement("p");
    pTimestamp.classList.add("timestamp");

    //Building the text message. It includes the space for the text and the space + the information of the timestamp
    let currentMessage = document.getElementById("message").innerHTML;
    if (currentMessage !== '') {
        divMessageSent.appendChild(pText);

        //Building the timestamp in the messages
        let now = new Date();
        let minutesFixed;
        if(now.getMinutes() >= 0 && now.getMinutes() <= 9) { //Conditional to display correctly HH:0M format!
            minutesFixed = "0" + now.getMinutes();
            } else {
            minutesFixed = now.getMinutes();
        }
        //Building and placing the information of the timestamp
        let timeNow = now.getHours() + ":" + minutesFixed;
        let newTimeNow = document.createTextNode(timeNow);
        pTimestamp.appendChild(newTimeNow);
        divMessageSent.appendChild(pTimestamp);

        //Building the day of send
        const MONTHS = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        let dateNow = now.getDate() + " de " + MONTHS[now.getMonth()];
        let datesDisplayed = document.getElementsByClassName("day")

        //If the current datesDisplayed last value is different that the current date, it means the date shall be displayed, so the code follows below:
        if(datesDisplayed[datesDisplayed.length-1].innerText !== dateNow) {
            let newDate = document.createTextNode(dateNow);
            let divForDate = document.createElement("div");
            divForDate.classList.add("day");
            divForDate.appendChild(newDate);
            let divForDayBox = document.createElement("div");
            divForDayBox.classList.add("day-box");
            divForDayBox.appendChild(divForDate);
            document.getElementById("text-content").appendChild(divForDayBox);
        }
        //If date is equal nothing to add to the text-display-area, so no "else" statement

        //Sending to the DOM all the elements with their text
        document.getElementById("text-content").appendChild(divMessageSent);

        //Sending the text to the DOM element. Reason to do it separately at README.md /Highlights & Lowlights/
        let num = document.getElementsByClassName("text").length;
        document.getElementsByClassName("text")[num-1].innerHTML = currentMessage;

        //Cleaning the input text after sending message
        document.getElementById("message").innerHTML = "";
    }
}

/**
 * 9. keyboardChange - displaying different keyboards depending on the key pressed. Each keyboad button sends
 * a value (keyboard1, keyboard2, keyboard3) that will follow "if" statements.
 * @param keyboard
 */
function keyboardChange(keyboard) {
    if (keyboard === "keyboard1") {
        document.getElementById("keyboard1").style.display = "flex";
        document.getElementById("keyboard2").style.display = "none";
        document.getElementById("keyboard3").style.display = "none";
    } else if (keyboard === "keyboard2") {
        document.getElementById("keyboard1").style.display = "none";
        document.getElementById("keyboard2").style.display = "flex";
        document.getElementById("keyboard3").style.display = "none";
    } else if (keyboard === "keyboard3") {
        document.getElementById("keyboard1").style.display = "none";
        document.getElementById("keyboard2").style.display = "none";
        document.getElementById("keyboard3").style.display = "flex";
    }
}

/**
 * 10. scrollUp - Function to scroll up automatically when new message is added in the display message area
 */
window.setInterval(function() {
    let elem = document.getElementById('text-content');
    elem.scrollTop = elem.scrollHeight;
});