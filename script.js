// hidden the match and mismatch section 

document.getElementById('match-pin').style.display = 'none';
document.getElementById('misMatch-pin').style.display = 'none';


// start of generate pin javascript section

document.getElementById("pin-generate-button").addEventListener("click", function() {
    document.getElementById("OTP-pin").value = Math.floor(1000 + Math.random() * 8999);
})

// end of generate pin javascript section


// Active number button 

function numberButton(num) {
    document.getElementById('pin-entry').value = document.getElementById('pin-entry').value + num;
}


// Active backspace button 

function backspace() {
    let inputValue = document.getElementById('pin-entry').value;
    document.getElementById('pin-entry').value = inputValue.substring(0, inputValue.length - 1);
}


// Active clear button 

function allClear() {
    document.getElementById('pin-entry').value = "";
}


// Submit button er kaj karbar :D 

function submitButton() {
    let pinInput = document.getElementById('pin-entry').value;
    let generatedPin = document.getElementById('OTP-pin').value;
    if (pinInput == "" && generatedPin == "") {
        alert('Please generate pin and try again');
    } else if (pinInput == generatedPin) {
        document.getElementById('match-pin').style.display = 'block';
        document.getElementById('misMatch-pin').style.display = 'none';
    } else {
        document.getElementById('misMatch-pin').style.display = 'block';
        document.getElementById('match-pin').style.display = 'none';
        tryLeft();
    }
}

// try left option er kaj karbar

document.getElementById('numberOfTries').style.display = 'none';

let countTries = 0;

function tryLeft() {
    let pinInput = document.getElementById('pin-entry').value;
    let generatedPin = document.getElementById('OTP-pin').value;

    if (countTries == 0 && pinInput != generatedPin) {
        document.getElementById('numberOfTries').style.display = 'block';
    } else if (countTries == 1 && pinInput != generatedPin) {
        document.getElementById('numberOfTries').innerText = '2 tries left';
    } else if (countTries == 2 && pinInput != generatedPin) {
        document.getElementById('numberOfTries').innerText = '1 tries left';
    } else {
        document.getElementById('numberOfTries').innerText = '0 tries left. Please try again after sometime.';
        document.getElementById('submit-button').disabled = true;
    }

    countTries++;
}



//   End