function getInput(){
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if(pin.length === 4){
        return pin;
    }
    else{
        return getInput();
    }
}

// Display Random Pin

function pinInput(){
    const pinValue = document.getElementById('pin');
    pinValue.value = getInput();
}

// Display Button Value

function getValue(num){
    const pin = document.getElementById('input-pin').value += num;
}
// clear input field
function clr(){
    document.getElementById('input-pin').value = '';
   
}

// Remove input
function remove(){
    const pin = document.getElementById('input-pin').value;
    document.getElementById("input-pin").value = pin.substr(0, pin.length - 1);

}
// Matching Pin
function matchPin(){
        const pinValue = document.getElementById('pin').value;
        const pin = document.getElementById('input-pin').value;
        let p = 2;
        if(p>=0){

        if(pinValue === pin){
            document.getElementById('matched').style.display = 'block';
        }
        else{
            document.getElementById('unmatched').style.display = 'block';
            document.getElementById('action-left').innerText = p;
            p--;
        }
    }
}
    
