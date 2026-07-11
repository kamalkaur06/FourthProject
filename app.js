// acces all elements here
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let resetScoreBtn = document.querySelector("#reset-score-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; /*playerX, playerO starts*/

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let count = 0;
let winnerFound = false;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        // console.dir("box was clicked");
        // box.innerText = "abcd";
        // let count = 0;
        // for (click=0; click<=9; click++){
        //     count = count + click;
        //     console.log(count);
        // }

        if(turnO ) { /*player0*/
            box.innerText = "O";
            turnO = false;
            box.style.color = "red";
        } else {      /*playerX*/
            box.innerText = "X";
            box.style.color = "blue";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
        checkDraw();
    });
});

const disableBoxes = () => {
        for (let box of boxes) {
            box.disabled = true;
        }
};

const enableBoxes = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
};

let xScore = 0;
let oScore = 0;
const showWinner = (winner) => {
    if (winner === "X") {
        xScore++;
        document.querySelector("#x-Score").innerText = xScore;
    } else {
        oScore++;
        document.querySelector("#o-Score").innerText = oScore;
    }
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        // // console.log(pattern);
        // console.log(pattern[0], pattern[1], pattern[2]); /*individual pattern acces*/
        // console.log(
        //     boxes[pattern[0]].innerText, /*posiiton 1*/
        //     boxes[pattern[1]].innerText, /*posiiton 2*/
        //     boxes[pattern[2]].innerText  /*posiiton 3*/
        // ); /*indiv. patt. acces with boxes and inner text*/
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("winner", pos1Val);
                showWinner(pos1Val);
                winnerFound = true;
                return;
            }
        }
    }
};  
        let drawMatch = 0;
        const checkDraw = () => {
            if (count === 9  && winnerFound === false) { 
            drawMatch++;
            document.querySelector("#draw-Match").innerText = drawMatch;
            msgContainer.classList.remove("hide");
            msg.innerText = "Oops! match is drawn";
           
            disableBoxes ();
        }
    }
        


const resetGame = () => {
    turnO = true;
    count = 0;
    winnerFound = false;
    enableBoxes();
    msgContainer.classList.add("hide");
};

resetScoreBtn.addEventListener("click", () => {
    xScore = 0;
    oScore = 0;
    drawMatch = 0;
    document.querySelector("#x-Score").innerText = xScore;
    document.querySelector("#o-Score").innerText = oScore;
    document.querySelector("#draw-Match").innerText = drawMatch;
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



// // 1D Array
// let arr = ["apple", "banana", "litchi"];

// // 2D Array
// let arr2 = [["apple", "litchi"], ["potato", "mushroom"], ["pants", "shirts"]];

// how to access array using js
// console.dir(arr2);
// console.dir(arr2[0]);
// console.dir(arr2[0] [0]);
// console.dir(arr2[0] [1]);
// console.dir(arr2[1] [0]);

/*In console window, simply wrote only brackets data but without brackets*/ 