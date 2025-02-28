function showMessage() {
    document.getElementById("message").innerText = "Hello, thanks for visiting!";
}
function getRandomMessage() {
    const contents = ["kkkkk", "any", "then", "any", "kkkk"];
    return contents[Math.floor(Math.random() * contents.length)]; // Pick a random message
}
function updateContent() {
    document.getElementById("status-message").innerText = getRandomMessage();
}
updateContent();