const body= document.querySelector("body");
const theme_btn = document.querySelector(".theme_btn");
const reset_btn = document.querySelector(".reset_game");
const boxes = document.querySelectorAll(".box");
const new_game=document.querySelector(".new_game");
const winnerMsg = document.querySelector(".winner_message");
console.dir(reset_btn);




let turnO=true;//playerX playerO
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



const reset_game = () =>{
    boxes.forEach((box)=>{
        turnO=true;
        box.innerText="";
        box.disabled=false;
    })
    winnerMsg.innerText="";
}
const disableboxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="0";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        chheckWinner();
    });
})


const chheckWinner= () =>{
    for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if((pos1==pos2) && (pos2==pos3)){
            // console.log("We have a winner");
            console.log(`We have a winner: ${pos1}`);
            winnerMsg.innerText=`Congratulations Player ${pos1}, you own the game!`;
            disableboxes();
            // resetGame();
        }}
        // );
    }
}



reset_btn.addEventListener("click",reset_game);
new_game.addEventListener("click",reset_game);




let current_theme="light";

theme_btn.addEventListener("click",()=>{
    if(current_theme==="light"){
        body.classList.add("dark");
        body.classList.remove("light");
        current_theme="dark";
        theme_btn.innerText="dark";
    }
    else{
        body.classList.add("light");
        body.classList.remove("dark");
        current_theme="light";
        theme_btn.innerText="light";
    }

})