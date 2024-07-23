let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let newbtn = document.querySelector("#new_game");
let msg = document.querySelector("#msg");
let msg_container = document.querySelector(".msg-container");

let turn0 = true;
const arr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = "True";
        checkWinner();
    })
})

const ShowWinner = (winner) =>{
msg.innerText = `Winner is ${winner}`;
msg_container.classList.remove("hide");
}
const checkWinner = () => {
 for (let pattern of arr){
    var1 = boxes[pattern[0]].innerText;
    var2 = boxes[pattern[1]].innerText;
    var3 = boxes[pattern[2]].innerText;
    if(var1 !="" && var2!="" && var3!=""){
        if(var1 === var2 && var2 === var3){
            for(let box of boxes){
                box.disabled = true;

            }
            ShowWinner(var1);
        }
    }
 }
}
reset.addEventListener("click",() =>{
    turn0 = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msg_container.classList.add("hide");
})
newbtn.addEventListener("click",() =>{
    turn0 = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msg_container.classList.add("hide");
})