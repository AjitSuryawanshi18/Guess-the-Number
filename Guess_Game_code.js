// random number generator guess quizz Game...
const Random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

console.log(Random);
let chance =100;

let clk =()=>{
    let enter=document.getElementById("getvalue").value;
    //  console.log(enter);
    if(Random==enter){
       
        let bg =document.getElementById("write");
        bg.style.backgroundColor="fuchsia";
         document.getElementById("write").innerHTML=`Right Number Will Be : `+Random+"<br> Your Score Will Be : "+chance+" /100";
       

       
    }else if(enter>Random && enter<=100){
        
        alert("Wrong Guess...Guessing Number is less than "+ enter);
        chance--;
        }else if(enter<Random && enter>=1){
         
            alert("Wrong Guess...Guessing Number is greater than "+ enter);
            chance--;
        }else{ 
            alert("Please Enter Number First oR Your Number is Out Of range..!");
        }
}