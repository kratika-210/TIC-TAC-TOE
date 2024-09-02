let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('#reset')
let newGame=document.querySelector('#new')
let msgContainer=document.querySelector('.msg-container')
let msg=document.querySelector('#msg')

let turnO= true;

//we creating win patterns
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

boxes.forEach(box=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText='O';
            turnO=false;
        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        box.style.backgroundColor="white"

        checkWinner();
    }
)
})

function  resetGame(){
    turn0=true;
    enableBoxes();
    msgContainer.classList.add('hide');
    
}

function enableBoxes(){
    boxes.forEach(box=>{
        box.disabled=false;
        box.innerText='';
        box.style.backgroundColor="lightcyan";
    })
}

function disableBoxes(){
    boxes.forEach(box=>{
        box.disabled=true;
    })
}

function showWinner(winner) {
    msg.innerText = `Player ${winner} wins!`;
    msg.style.color = 'darkgreen';
    msg.style.fontSize = '30px';
    msg.style.fontWeight = 'bold';
    msg.style.border = 'none';
    msg.style.backgroundColor = 'lightgreen';
    msg.style.height = '70px';
    msg.style.padding = '15px';
    msgContainer.classList.remove('hide');
    disableBoxes();
   

}

function checkWinner(){
    winPatterns.forEach(pattern=>{
        let a,b,c
        a=boxes[pattern[0]].innerText;
        b=boxes[pattern[1]].innerText;
        c=boxes[pattern[2]].innerText;
        if(a==b && b==c && a!=''){
        showWinner(a)
            }
    })
}


newGame.addEventListener('click',resetGame);        
reset.addEventListener('click',resetGame);        