var birthday = document.querySelector(".dob-input")
var luckyNumber = document.querySelector(".luckynumber-input");
var luckyBtn = document.querySelector("#check-btn");
var displayMessage = document.querySelector("#result-message");

function checkLucky(dob, luckydob){
    var sum = 0;
    for(var i=0; i<dob.length; i++){
        sum += Number(dob.charAt(i));
    }
    if(sum%luckydob == 0){
        showMessage(`Yay! ${luckyNumber.value} is a lucky number for you`);
    } else {
        showMessage(`${luckyNumber.value} is not that lucky for you`);
    }
}

function formatInputs(dob, luckydob){
    dob = dob.replaceAll("-","");
    checkLucky(dob, luckydob);
}

function getNumbers(){
    var dob = birthday.value;
    var luckydob = luckyNumber.value;
    if(dob && luckydob){
        if(luckydob > 0){
            formatInputs(dob, luckydob);
        } else {
            showMessage("Please enter a positive number")
        }
    } else {
        showMessage("Please enter values in both fields")
    }
}

function showMessage(userMessage){
    displayMessage.innerHTML = userMessage
}
luckyBtn.addEventListener("click", getNumbers);
