let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let addBtn = document.getElementById("addBtn");

let spanElement = document.createElement("span");
spanElement.classList.add("span");
wordsContainer.appendChild(spanElement);

addBtn.onclick = function() {
    if (userInput.value === "") {
        errorMsg.textContent = "Please enter a word";
    } else {
        let spanElement = document.createElement("span");
        let minFont = 10;
        let maxFont = 40;
        let randomFontSize = Math.floor(Math.random() * (maxFont - minFont + 1)) + minFont;
        spanElement.style.fontSize = randomFontSize + "px";
        spanElement.textContent = userInput.value;
        wordsContainer.appendChild(spanElement);

    }
    userInput.value = ""
}