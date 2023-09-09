document.getElementById("incrementbtn").addEventListener('click',incrementcounter);
document.getElementById("decrementbtn").addEventListener('click',decrementcounter);
document.getElementById("resetBtn").addEventListener('click',resetcounter);

let counterDisplay = document.getElementById("counterDisplay")
let counterValue = 0;


function updateCounterDisplay(){
    counterDisplay.textContent = counterValue;
}

function incrementcounter(){
    counterValue++;
    updateCounterDisplay();
}


function decrementcounter(){
    if (counterValue>0){
        counterValue--;
        updateCounterDisplay();
    }
}


function resetcounter(){
    counterValue = 0;
    updateCounterDisplay();
}