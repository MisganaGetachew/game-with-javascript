let btn1 =   document.getElementById('btn1');
let btn2  =  document.getElementById('btn2');
let btn3  =  document.getElementById('btn3');
let btn4  =  document.getElementById('btn4');
let btn5  =  document.getElementById('btn5');
let btn6  =  document.getElementById('btn6');
let btn7  =  document.getElementById('btn7');
let btn8  =  document.getElementById('btn8');
let btn9  =  document.getElementById('btn9');
let h2 = document.getElementById('h2');
let Xvoice= new Audio("solo.mp3")
let Yvoice = new Audio("pocket.mp3")
let drawVoice = new Audio("lift.mp3")
let winnerVoice = new Audio("duel_event.mp3")
let restart = document.getElementById('restart');
// console.log(btn9);
// btn9.innerHTML = 'x';
// btn9.in
var count = 0;
var temp;

function start (){
    location.reload();
}

function clicked( button){
    count++;
    if((count%2) == 0){
        Xvoice.play() 
        button.innerText = 'X';        
        button.style.background = '#8458B3';   
        button.onclick = null;
    }
    else{
        Yvoice.play()
        button.innerText = 'O'; 
        button.style.background = '#ffa8B6';
        button.onclick = null;
    }

   winner();
   
}



function winner(){

    if((btn1.innerText == 'X' && btn2.innerText == 'X' && btn3.innerText == 'X')
    || (btn1.innerText == 'X' && btn4.innerText == 'X' && btn7.innerText == 'X')
    || (btn1.innerText == 'X' && btn5.innerText == 'X' && btn9.innerText == 'X')
    || (btn2.innerText == 'X' && btn5.innerText == 'X' && btn8.innerText == 'X')
    || (btn3.innerText == 'X' && btn6.innerText == 'X' && btn9.innerText == 'X')
    || (btn4.innerText == 'X' && btn5.innerText == 'X' && btn6.innerText == 'X')
    || (btn7.innerText == 'X' && btn8.innerText == 'X' && btn9.innerText == 'X')
    || (btn7.innerText == 'X' && btn5.innerText == 'X' && btn3.innerText == 'X')
    
    ){
        h2.style.color = '#8458B3';
        h2.innerText = "X is the winner! ";
        winnerVoice.play();
    
    }
    
    if((btn1.innerText == 'O' && btn2.innerText == 'O' && btn3.innerText == 'O')
    || (btn1.innerText == 'O' && btn4.innerText == 'O' && btn7.innerText == 'O')
    || (btn1.innerText == 'O' && btn5.innerText == 'O' && btn9.innerText == 'O')
    || (btn2.innerText == 'O' && btn5.innerText == 'O' && btn8.innerText == 'O')
    || (btn3.innerText == 'O' && btn6.innerText == 'O' && btn9.innerText == 'O')
    || (btn4.innerText == 'O' && btn5.innerText == 'O' && btn6.innerText == 'O')
    || (btn7.innerText == 'O' && btn8.innerText == 'O' && btn9.innerText == 'O')
    || (btn7.innerText == 'O' && btn5.innerText == 'O' && btn3.innerText == 'O')
    
    ){
        h2.style.color = '#ffa8B6';
        h2.style.fontWeight = 'bold'
        h2.innerText = "O is the winner!";
        winnerVoice.play();
       
    
    }

   else  if(count == 9){
    h2.innerText = "the game is draw!";
    drawVoice.play();
    
    }

}
 
