window.onload = function() {
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");

    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box";

    speechBubbleElement.appendChild(messageBox);

    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
}

function showMessage() {
    // console.log("Hello, is it me you're looking for?");
    let message = document.getElementById("message-text").value;
    let name = document.getElementById("name-text").value;
    let messageBox = document.getElementById("message-box");
    messageBox.innerText = (`${message} ${name}`);
    // console.log(message);
}

// camel case = showMessage
// snake case = show_message
// kebab case = show-message