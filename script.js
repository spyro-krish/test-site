function showMessage() {
    document.getElementById("message").innerText = "Hello, thanks for visiting!";
}
function updateContent() {
    const contents = ["kaliraj", "sri","ram","an","war"]; // Add more as needed
    let index = 0;

    setInterval(() => {
        // if(index == 0||index==2||index==4){
        //     document.getElementById("dynamic-content").innerText = contents[index]+contents[index+1];
        // }else{
            document.getElementById("dynamic-content").innerText = contents[index];
        // }
        index = (index + 1) % contents.length; // Loop through array
    }, 500);
}
updateContent();