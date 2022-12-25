let blog = document.querySelector(".blogButtons");
let blogButtons = document.querySelectorAll(".blogButtons button");
let twitter = document.querySelector(".twitterButtons");
let twitterButtons = document.querySelectorAll(".twitterButtons button");

for (let btn of blogButtons) {
    btn.classList.add("buttonGrey");
}
blogButtons[0].classList.remove("buttonGrey");
blogButtons[0].classList.add("buttonRed");

for (let btn of twitterButtons) {
    btn.classList.add("buttonGrey");
}
twitterButtons[0].classList.remove("buttonGrey");
twitterButtons[0].classList.add("buttonRed");

blog.addEventListener("click", (ev)=> {
    if (ev.target.tagName === "BUTTON") {
        for (let btn of blogButtons) {
            btn.classList.remove("buttonRed");
            btn.classList.add("buttonGrey");
        }
        ev.target.classList.remove("buttonGrey");
        ev.target.classList.add("buttonRed");
    }
})

twitter.addEventListener("click", (ev)=> {
    if (ev.target.tagName === "BUTTON") {
        for (let btn of twitterButtons) {
            btn.classList.remove("buttonRed");
            btn.classList.add("buttonGrey");
        }
        ev.target.classList.remove("buttonGrey");
        ev.target.classList.add("buttonRed");
    }
})

