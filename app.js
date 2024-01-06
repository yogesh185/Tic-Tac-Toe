let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("resetbtn");
let msg = document.querySelector("p");
let msgBox = document.querySelector(".winner");
let newBtn = document.querySelector("#newbtn")

let turnX=true;
let count=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7], 
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX===true){
            box.innerHTML="X";
            box.style.color="orange";
            turnX = false;
        }
        else{
            box.innerHTML="O";
            box.style.color="blue";
            turnX = true;
        }
        box.disabled = true;
        count++;
        checkWinner();


        let isWinner = checkWinner();
        
        if(count==9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = ()=>{
    msg.innerText = `DRAW !!`;
    msgBox.classList.remove("hide");
};

const resetGame = () => {
    turnX=true;
    count=0;
    enableBox();
    msgBox.classList.add("hide");
}

const disableBox = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBox = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerText = `${winner} is the Winner !!`;
    msgBox.classList.remove("hide");
    disableBox();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
            let val1 = boxes[pattern[0]].innerText;
            let val2 = boxes[pattern[1]].innerText;
            let val3 = boxes[pattern[2]].innerText;

            if(val1 != "" && val2 !="" && val3 !=""){
                if(val1 == val2 && val2 == val3){
                    console.log("Winner");
                    showWinner(val1);
                }
            }
    }
};

resetbtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);