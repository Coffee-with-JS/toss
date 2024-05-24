let btns = document.querySelectorAll('button');
let scoreArea = document.querySelector('.scoreArea');


// btns[0] 
// btns[1]

// btns[0].addEventListener('click', toss)
// btns[1].addEventListener('click', toss)

for(let t of btns){
    t.addEventListener("click", (eventDetails)=>toss(eventDetails,10,20))
}

// function addEventListener(t1,t2){
//   // t2  =  (eventDetails)=>toss(10,20)

//     // t2(eventDetails)
//       t2(eventDetails)
   
// }

// function t2(eventDetails){
//      toss(eventDetails,10,20)
// }



function toss(eventDetails, a,b){
    console.log(eventDetails,a,b);
    // console.log(eventDetails.target)
    // let selectedElement = eventDetails.target;
    // let userChoice = selectedElement.innerText;
    // let userChoice = eventDetails.target.innerText
    // console.log(userChoice);
}


