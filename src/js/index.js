

const button1 = document.getElementById("button1").addEventListener("click", (event) => {
    event.preventDefault();
    const notification = document.getElementById("notification1");
    const input = document.getElementById("input1");
    notification.innerHTML = "Please check your email";
    notification.style.color = "#EF4877"
    notification.style.fontFamily = "Open Sans"
    notification.style.fontSize = "14px"
    input.style.border = "1px solid #EF4877";
    

})

const button2 = document.getElementById("button2").addEventListener("click", (event) => {
    event.preventDefault();
    const notification = document.getElementById("notification2");
    const input = document.getElementById("input2");
    notification.innerHTML = "Please check your email";
    notification.style.color = "white"
    notification.style.fontFamily = "Open Sans"
    notification.style.fontSize = "12px"
    input.style.border = "1px solid #EF4877";
    

})


