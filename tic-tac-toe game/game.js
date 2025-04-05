let boxes = document.querySelectorAll(".box");
let winningMessage = document.querySelector(".message");
let newBtn = document.querySelector(".newgame");
let winningContainer = document.querySelector(".winning");
let resetBtn = document.querySelector(".resetbtn");

let winningPatterns = [[0,1,2], [3,4,5], [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let playerO = true;

winningContainer.style.display = "none";

    for(let box of boxes){
        box.addEventListener("click", ()=> {
            if (playerO){
                box.innerText = "O";
                playerO = false;
            }
            else {
                box.innerText = "X";
                playerO = true;
            }
            box.disabled = true;
            checkWinner();
        });
    }

newBtn.addEventListener("click", () => {
    playerO = true;
    winningContainer.style.display = "none";
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
        box.addEventListener("click", ()=> {
            if (playerO){
                box.innerText = "O";
                playerO = false;
            }
            else {
                box.innerText = "X";
                playerO = true;
            }
            box.disabled = true;
            checkWinner();
        });
    }
});

resetBtn.addEventListener("click", () => {
    playerO = true;
    winningContainer.style.display = "none";
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
        box.addEventListener("click", ()=> {
            if (playerO){
                box.innerText = "O";
                playerO = false;
            }
            else {
                box.innerText = "X";
                playerO = true;
            }
            box.disabled = true;
            checkWinner();
        });
    }
});

const checkWinner = () => {
    for (let pattern of winningPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !== "" && pos2val!== "" && pos3val !== "" && pos1val === pos2val && pos2val === pos3val){
            for(let box of boxes){
                box.disabled = true;
            }
            showWinMsg(pos1val);
            return;
        }
    }
};


const showWinMsg = (pos1val) => {
    winningContainer.style.display = "block";
    winningMessage.innerText = `Congratulations, Player ${pos1val} won!`;
};