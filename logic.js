let gameSeq = [];
let userSeq = [];
let started = false;
let level = -1;
let h2 = document.querySelector('h2');
let btns = ["red", "yellow", "green", "purple"];

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }


});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove('flash')
    }, 500);

} function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove('userflash')
    }, 500);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerHTML = ` your at Level-<b style="color:red; font-size:30px;">${level}</b>`;
    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[ranIdx];
    let randBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log("game seq", gameSeq);
    // console.log(ranIdx);
    // console.log(randBtn);
    // console.log(ranColor)
    gameFlash(randBtn);
}


function checkans(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000)
        }
    }
    else {
        h2.innerHTML = ` <b style="color:red;">Game is over!</b>, Your Score is:<b style=" color:red;font-size:40px;">${level}</b> <br> <b style="color:green;">Press any key to start the game</b>`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },250);
        
        reset();
    }
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}





function btnpress() {
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute('id')
    userSeq.push(usercolor);
    console.log("user seq:", userSeq);
    checkans(userSeq.length - 1);
}
let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnpress)

}

//  matching




