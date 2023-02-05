function getImage() {
    let imageURL = document.getElementById("image-url").value;
    console.log(imageURL);

    let imageBox = document.createElement("img");
    imageBox.id = "meme-wrapper";
    imageBox.src = imageURL;

    let wrapper = document.getElementById("meme-image-wrapper");
    wrapper.appendChild(imageBox);

    // my attempt - - - - - - 
    // let imageBox = document.createElement("img");
    // imageBox.classList.add("meme-image");

    // imageBox.appendChild("meme-image-wrapper");

    // let outputElement = document.getElementById("output");
    // outputElement.appendChild(speechBubbleElement);

    document.getElementById("meme-builder").style.display = "block";

}

function addTopText() {
    let topText = document.getElementById("top-text-input").value;
    document.getElementById("top-text").innerText = topText;
}