let myTextObject;
/*
 * myText() function
 * Answers users questions. Triggered by updateQuestion()
 * findAnswer is a helper function to loadAnswer. Loads the thinking icon along with the thinkingText function
 * loadAnswer actually searches for a viable answer
 */
function myText(text) {
    this.text = text;
    document.getElementById("AI_text").innerHTML += "<div class='userResponse'>" + text + "</div>";
    document.getElementById("AI_textbox").value = "";
    this.prevText = document.getElementById("AI_text").innerHTML;

    this.findAnswer = function() {
        let s = "*..";
        let s2 = ".*.";
        let s3 = "..*";
        setTimeout(this.thinkingText, 1, this.prevText, s);
        setTimeout(this.thinkingText, 500, this.prevText, s2);
        setTimeout(this.thinkingText, 1000, this.prevText, s3);
        setTimeout(this.thinkingText, 1500, this.prevText, null);
        setTimeout(this.loadAnswer, 1750, this);
    }
    this.thinkingText = function(oldText, loadingText) {
        document.getElementById("AI_text").innerHTML = oldText;
        if(loadingText != null)
            document.getElementById("AI_text").innerHTML += "<div class='AIResponse'>" + loadingText + "</div>";
    }
    this.loadAnswer = function(obj) {
        obj.text = obj.text.toLowerCase();
        let answer = "";
        if(obj.text === "Hello")
            answer = "Hello! :)";
        else if (/jadon/g.exec(obj.text) != null)
            answer = "Ah yes... Jadon the sexiest man to ever exist";
        else if (obj.text.substring(0,2) === "?p")
            answer = showProduct(obj.text.substring(2).trim(), "findProduct");
        else if (/couch/g.exec(obj.text) != null)
            answer = showProduct("couch", "findCount");
        else if (obj.text === "help" || obj.text === "h")
            answer = "Type ?p and the name of a product you'd like more details on, or you can ask a general question! Or, you can type a general furniture to open that furniture";
        else if(obj.text === "lamp") {
            window.open("lampFile.html");
            answer = "Opened! :D";
        } else
            answer = "Sorry, I do not understand " + obj.text;

        document.getElementById("AI_text").innerHTML += "<div class='AIResponse'>" + answer + "</div>";
    }
}

/*
* updateQuestion()
* When a question is asked, it triggers this function which in turn triggers myText() function.
 */
function updateQuestion() {
    let input = document.getElementById("AI_textbox").value;
    if(input.trim() === "")
        return;
    myTextObject = new myText(input);
    myTextObject.findAnswer();
}

/*
 * sayGreetings()
 * First initial message from AI chatbot
 */
function sayGreetings() {
    document.getElementById("AI_text").innerHTML = "<div class='AIResponse'>Greetings! What can I help you with?</div>";
}
sayGreetings();

/*
 * The following block of code triggers the update button when the enter key is pressed so the user doesn't need to manually press the ask button
 */
document.getElementById("AI_textbox")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("updateButton").click();
        }
    });