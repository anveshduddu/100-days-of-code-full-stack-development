function calcNumbers(result){
    document.querySelector('.area').value +=  result;
}
function percentage(result){
    var result1 = String(result);
    if (result1.includes("%")){
        var a, b , percent;
        var splitWord = [];
        splitWord = result1.split('%');
        a = Number(splitWord[0]);
        b = Number(splitWord[1]);
        percent = (a/100) * b;
        document.querySelector('.area').value = percent;
    }
}
function makeNegative(result){
    if(result.charAt(0)==='-') {
        document.querySelector('.area').value = result.replace('-','');
    }
    else{
        document.querySelector('.area').value = '-' + result;
    }
}
