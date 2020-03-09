var myTextObject;
function myText(text) {
    this.text = text;

    this.findAnswer = function() {

    }
}

function updateQuestion() {
    let input = document.getElementById("chatbotInput");
    myTextObject = new myText(input);
    myTextObject.findAnswer();
}