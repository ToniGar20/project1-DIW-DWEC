# Whatsagram - Project 1 for DIW-DWEC

Development of a local messaging application in which different messages can be sent to a "text-area" using "onclick" events of a keyboard.

Both the interface and the minimum required functionalities are similar to the WhatsApp or Telegram applications.

* [TODO list dedicated document](https://github.com/ToniGar20/project1-DIW-DWEC/blob/master/TODO.md)
* README index:
  * [Preview](https://github.com/ToniGar20/project1-DIW-DWEC#1-preview)
  * Description of project's content
  * Highlights and lowlights of developement process
  * Deployment
  * Tools used

## 1. Preview
![Whatsagram by Toni García](/misc/whatsagram-gif-toni.gif)


## 2. Description of project's content
At repository homepage ther are the .gitignore, TODO.md and this READ.md files. Furthermore 2 folders can be found: "misc" contains random stuff (just the script from above) and "project" contains the application.

"project" directory have an "index.html" as main. "src" contains CSS and JS files in addition to "images" folder, with all the items that are used for "Whatsagram".

## 3. Highlights and lowlights of development process

Next, there a list of resolutions and difficulties found throughout the development process:

###Hihglights & Good Learnings
* **Keyboards**: was funny to work with different keyboards playing with his visibility in order to show the one required.
* **Status top bar**: inspired on "Whatsapp", I've added a top bar with myself, including name, photo and status (online always).
* **Default message displayed**: with the objective to simulate a real conversation, I've added a default text asking you about my application.
* **Default margins**: I got crazy trying to understand why the responsive version drew some margins. Solved it with whole document property (*) margin: 0;
* **Property "word-break""**: The best CSS property I've discovered at the project!

###Lowlights & Difficulties
* **Not working with textarea or inputs at message writing box**: I've done it with a "\<div>" element and it was a waste of time since I had to spend many hours with line break functionality. JS function "createTextNode" was deleting \<br> injected on .innerHTML, so I had to fin another way. In this case, save the \<br> and send it at the end, before the message labels were at the DOM.
* **Permanent UpperCase Button**: now works well but was the main challenge since the JS is so modular. Got to solve it with conditionals and variables storing status.
* **Understanding CSS flex properties**: reviewed concepts, videos and notes to apply functionalities in the application.
* **"px" as main CSS measure**: difficulties in applying relative measures. It has involved detailing all the key measures in the media query.


## 4. Deployment

## 5. Tools used
* IDE - IntelIJ
* 
