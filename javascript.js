function getComputerChoice(){
    let num=Math.random();
    let ans=Math.floor(num*3);
    //console.log(num);
    if(ans==0){
        return "rock";
    }
    else if(ans==1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice=prompt("Enter your choice: rock, paper, or scissors");
    choice=choice.toLowerCase();
    if(choice=="rock" || choice=="paper" || choice=="scissors"){
        return choice;
    }
    else{
        alert("Invalid choice, please try again.");
        return getHumanChoice();
    }
}

let compscore=0;
let humanscore=0;

for(let i=0;i<5;i++){
    console.log("Round "+(i+1));
    a=getComputerChoice();
    b=getHumanChoice();

    if(a==b){
        console.log("It's a tie!");
    }
    else if((a=="rock" && b=="scissors") || (a=="paper" && b=="rock") || (a=="scissors" && b=="paper")){
        console.log("Computer wins this round!");
        compscore++;
    }
    else{
        console.log("You wins this round!");
        humanscore++;
    }


    console.log("Computer chose:"+a);
    console.log("You chose:"+b);
    console.log("Computer score: " + compscore);
    console.log("Your score: " + humanscore);
    console.log("");
}
if(compscore<humanscore)
{
    console.log("You win!");
}
else if(compscore==humanscore)
{
    console.log("It is a tie!");
}
else{
    console.log("Computer wins!");
}