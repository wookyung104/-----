const h1 = document.querySelector("div.hello:first-child h1");
//querySelector과 getElementById는 똑같은 기능
//querySelector은 css selector 자체를 전달

// console.dir(title); //dir은 object로 표시한 element를 보여줌

function handleTitleClick() {
    h1.style.color = "purple";
}

function handleTitleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function hadleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS WIFI!");
}

function handleWindowOnline() {
    alert("SO GOOOD!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleTitleMouseEnter);
h1.addEventListener("mouseleave", hadleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);