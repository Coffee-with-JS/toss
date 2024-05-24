let btns = document.querySelectorAll('button');
let scoreArea = document.querySelector('.scoreArea');


// btns[0] 
// btns[1]

// btns[0].addEventListener('click', toss)
// btns[1].addEventListener('click', toss)

for(let t of btns){
    t.addEventListener("click", toss)
}

// function addEventListener(t1,t2){


//     t2(eventDetails)
// }



function toss(eventDetails){
    console.log(eventDetails);
    // console.log(eventDetails.target)
    // let selectedElement = eventDetails.target;
    // let userChoice = selectedElement.innerText;
    let userChoice = eventDetails.target.innerText
    console.log(userChoice);
}


