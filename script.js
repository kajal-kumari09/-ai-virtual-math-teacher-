function sendMessage() {
    let inputBox = document.getElementById("input");
    let userText = inputBox.value;

    if (userText === "") return;

    addMessage("user", userText);

    let response = solveMath(userText);

    addMessage("bot", response);

    inputBox.value = "";
}

// Show messages
function addMessage(sender, text) {
    let chatBox = document.getElementById("chat-box");

    let message = document.createElement("p");
    message.className = sender;
    message.innerText = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Solve math
function solveMath(input) {
    try {
        let cleaned = input.replace(/[^0-9+\-*/().]/g, "");

        if (cleaned === "") {
            return "Please enter a valid math question.";
        }

        let result = eval(cleaned);

        return "Answer: " + result + " (Calculated step-by-step)";
    } catch {
        return "Invalid question!";
    }
}

// Clear chat
function clearChat() {
    document.getElementById("chat-box").innerHTML = "";
}
