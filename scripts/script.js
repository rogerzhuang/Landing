let blog = document.querySelector(".blogButtons");
let blogButtons = document.querySelectorAll(".blogButtons button");
let twitter = document.querySelector(".twitterButtons");
let twitterButtons = document.querySelectorAll(".twitterButtons button");
let touchstartX = 0
let touchendX = 0

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

function checkDirection(buttons) {
    if (touchendX < touchstartX) {
        // alert('swiped left!')
        let i = 0;
        for (let btn of buttons) {
            if (btn.classList.contains("buttonRed")) {
                btn.classList.remove("buttonRed");
                btn.classList.add("buttonGrey");
                break;
            };
            i++;
        }
        if (i !== 2) {
            buttons[i+1].classList.remove("buttonGrey");
            buttons[i+1].classList.add("buttonRed");
        }
        else {
            buttons[2].classList.remove("buttonGrey");
            buttons[2].classList.add("buttonRed");
        }
    }   
    if (touchendX > touchstartX) {
        // alert('swiped right!')
        let i = 0;
        for (let btn of buttons) {
            if (btn.classList.contains("buttonRed")) {
                btn.classList.remove("buttonRed");
                btn.classList.add("buttonGrey");
                break;
            };
            i++;
        }
        if (i !== 0) {
            buttons[i-1].classList.remove("buttonGrey");
            buttons[i-1].classList.add("buttonRed");
        }
        else {
            buttons[0].classList.remove("buttonGrey");
            buttons[0].classList.add("buttonRed");
        }
    }
}

document.querySelector(".blogPosts").addEventListener('touchstart', (ev) => {
    touchstartX = ev.changedTouches[0].screenX
})

document.querySelector(".blogPosts").addEventListener('touchend', (ev) => {
    touchendX = ev.changedTouches[0].screenX
    checkDirection(blogButtons)
})

document.querySelector(".twitterPosts").addEventListener('touchstart', (ev) => {
    touchstartX = ev.changedTouches[0].screenX
})

document.querySelector(".twitterPosts").addEventListener('touchend', (ev) => {
    touchendX = ev.changedTouches[0].screenX
    checkDirection(twitterButtons)
})