let btns = document.querySelectorAll('button');
let scoreArea = document.querySelector('.scoreArea');


// btns[0] 
// btns[1]

// btns[0].addEventListener('click', toss)
// btns[1].addEventListener('click', toss)

for(let t of btns){
    t.addEventListener("click", function(){toss(t)})
}

// function addEventListener(t1, t2){
//   // t2 = function(){toss(t)}

// //   function t2(){
// //     toss(t1)
// //   }
//     t2()

// }

let userScore = 0
let computerScore = 0
function toss(clickedButton){
    let userChoice = clickedButton.innerText;
    // console.log(userChoice);
    let choices = ["Head", "Tail"]
    let randomIndex = parseInt(Math.random()*choices.length); // 0,1
    let computerChoice = choices[randomIndex];
    if(userChoice == computerChoice){
        userScore++;
    }
    else{
        computerScore++;
    }
    scoreArea.innerHTML = `<h3>User: ${userScore} </h3>  <h3>Computer: ${computerScore}</h3>`

    // scoreArea.style.color = "green";
    // scoreArea.style.border = "1px solid green";
    // scoreArea.style.backgroundColor = "lightgreen";
    // scoreArea.style.textAlign = "center";

    // scoreArea.style.cssText = `
    //   color: green;
    //   border: 1px solid green;
    //   background-color: lightgreen;
    //     text-align: center;
    // `
}