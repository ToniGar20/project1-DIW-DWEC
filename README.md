# Whatsagram - Project 1 for DIW-DWEC

Development of a local messaging application in which different messages can be sent to a "text-area" using "onclick" events of a keyboard.

Both the interface and the minimum required functionalities are similar to the WhatsApp or Telegram applications.

* [**TODO list dedicated document**](https://github.com/ToniGar20/project1-DIW-DWEC/blob/master/TODO.md)


* **README index**:
  * [1. Preview](https://github.com/ToniGar20/project1-DIW-DWEC#1-preview)
  * [2. Description of project's content](https://github.com/ToniGar20/project1-DIW-DWEC#2-description-of-projects-content)
  * [3. Highlights and lowlights of development process](https://github.com/ToniGar20/project1-DIW-DWEC#3-highlights-and-lowlights-of-development-process)
  * [4. Deployment](https://github.com/ToniGar20/project1-DIW-DWEC#4-deployment)
  * [5. Tools and resources](https://github.com/ToniGar20/project1-DIW-DWEC#5-tools-and-resources)

## 1. Preview
![Whatsagram by Toni García](/misc/whatsagram-gif-toni.gif)


## 2. Description of project's content
At repository homepage there are the .gitignore, TODO.md and this READ.md files. Furthermore 2 folders can be found: "misc" contains random stuff (just the script from above) and "project" contains the application.

"project" directory have an "index.html" as main. "src" contains CSS and JS files in addition to "images" folder, with all the items that are used for "Whatsagram".

Other details are the ones following:
 * Google Font used: [Lato Regular 400]("https://fonts.google.com/specimen/Lato")
 * CSS Variables for colors
 * Just responsive version for Galaxy S5

## 3. Highlights and lowlights of development process

Next, there a list of resolutions and difficulties found throughout the development process:

### Highlights & Good Learnings
* **Keyboards**: was funny to work with different keyboards playing with his visibility in order to show the one required.
* **Status top bar**: inspired on "Whatsapp", I've added a top bar with myself, including name, photo and status (online always).
* **Default message displayed**: with the objective to simulate a real conversation, I've added a default text asking you about my application.
* **Default margins**: I got crazy trying to understand why the responsive version drew some margins. Solved it with whole document property (*) margin: 0;
* **Property "word-break""**: the best CSS property I've discovered at the project !

### Lowlights & Difficulties
* **Not working with _textarea_ or _inputs_ at message writing box**: I've done it with a "\<div>" element, and it was a waste of time since I had to spend many hours with line break functionality. JS function "createTextNode" was deleting \<br> injected on .innerHTML, so I had to find another way. The way was to save the \<br> and send it at the end, before the message labels are already at the DOM.
* **Permanent UpperCase Button**: now works well but was the main challenge since the JS is so modular. Got to solve it with conditionals and variables for storing different status depending on a click, a double click or a non-click at the button.
* **"px" as main CSS measure**: difficulties in applying relative measures. It has involved detailing all the key measures in the media query.

## 4. Deployment

WIP

## 5. Tools and resources

###Tools
* IntelIJ IDE
* [ScreenToGif](https://www.screentogif.com/) desktop application

###Resources
* [Netlify](https://www.netlify.com/)
* [Github checkboxes](https://www.w3schools.io/file/markdown-checkbox-github/)
* [README template by Vilanuevand](https://gist.github.com/Villanuevand/6386899f70346d4580c723232524d35a)