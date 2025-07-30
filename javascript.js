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

function getHumanChoice() {
    return new Promise((resolve) => {
        let btn1=document.querySelector("#rock");
        let btn2=document.querySelector("#paper");
        let btn3=document.querySelector("#scissors");

        btn1.addEventListener("click", () => resolve("rock"));
        btn2.addEventListener("click", () => resolve("paper"));
        btn3.addEventListener("click", () => resolve("scissors"));
    });
}

(async function playGame() {
    let compscore = 0;
    let humanscore = 0;

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));
        const a = getComputerChoice();
        const b = await getHumanChoice(); // Wait for the user to make a choice

        if (a === b) {
            console.log("It's a tie!");
        } else if (
            (a === "rock" && b === "scissors") ||
            (a === "paper" && b === "rock") ||
            (a === "scissors" && b === "paper")
        ) {
            console.log("Computer wins this round!");
            compscore++;
        } else {
            console.log("You win this round!");
            humanscore++;
        }

        console.log("Computer chose: " + a);
        console.log("You chose: " + b);
        console.log("Computer score: " + compscore);
        console.log("Your score: " + humanscore);
        console.log("");
    }
})();