
let rand=Math.floor(Math.random()*100+1);// random num:0-1 so 1+99 or 1*100  
                                         // 100+1 - diaplay till 100 
console.log(rand);
let attempt=0;
function guessGame(){
    let input = document.getElementById("num").value;
    if(rand==input){
      document.writeln("You won the game! \n Your Attempt:"+attempt) //dispaly in new page
    }
    else if(rand>input){
        document.getElementById("res").innerText="to low";
        attempt+=1;
    }
    else if(rand<input){
        document.getElementById("res").innerText="to high";
        attempt+=1
    }
    
}