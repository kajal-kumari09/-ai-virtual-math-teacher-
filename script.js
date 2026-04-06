function sendMessage() {
    let inputBox = document.getElementById("input");
    let userText = inputBox.value;

    if (userText === "") return;

    addMessage("user", userText);

    let response = solveMath(userText);

    setTimeout(() => {
        addMessage("bot", response);
    }, 500);

    inputBox.value = "";
}

// Function to display messages
function addMessage(sender, text) {
    let chatBox = document.getElementById("chat-box");

    let message = document.createElement("p");
    message.className = sender;
    message.innerText = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Math solving logic
function solveMath(input) {
    try {
        // Clean input (only numbers & operators)
        let cleaned = input.replace(/[^0-9+\-*/().]/g, "");

        if (cleaned === "") {
            return "Please enter a valid math question.";
        }

        let result = eval(cleaned);

        return "Answer: " + result + "\nStep: Solved using basic math operation.";
    } catch {
        return "Sorry, I couldn't understand the question.";
    }
}

// Clear chat
function clearChat() {
    document.getElementById("chat-box").innerHTML = "";
}
