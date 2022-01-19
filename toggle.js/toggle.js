// 요러한 방법도 있지만 toggle이 훨씬 편리 !
const title = document.querySelector(".hello h1");

function changeTitleClick() {
    const clickedClass = "clicked";
    if(title.classList.contains(clickedClass)) {
        title.classList.remove(clickedClass);
    }else{
        title.classList.add(clickedClass);
    }
}

title.addEventListener("click", changeTitleClick);

//toggle 이용
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
} // toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서
  // 만약 있다면, toggle이 clicked를 제거해 준다.

h1.addEventListener("click", handleTitleClick);