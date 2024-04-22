var displayinput = document.getElementById("displyinput")
function getval(val){
    displayinput.value += val;
}
function calculate(){
    displayinput.value = eval (displayinput.value);
}
function clearAll(){
    displayinput.value = "";
}