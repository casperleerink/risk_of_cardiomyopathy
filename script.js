function updateTextInput(val) {
    var result = val + "%";
    document.getElementById('rangeValue').value=result; 
}

function calcRisk(ef, ant, chestrt) {
    var c1 = -0.227136985;
    var c2 = 0.003540834;
    var c3 = 0.055104531;
    var c4 = -11.71785;
    var c5 = 0.00901034;
    var interim = -1.0 * (Math.exp(((ef*c1)+(ant * c2)+(chestrt * c3)) - c4) * c5);
    console.log(interim);
    
    console.log(Math.exp(interim));
    
    var result = (1.0 - Math.exp( -1.0*( Math.exp(((ef*c1)+(ant * c2)+(chestrt * c3)) - c4) *  (c5) )));
    console.log(result);
    
    return result;
}

function getResult() {
    var ef = parseFloat(document.getElementById('EF').value);
    var ant = parseFloat(document.getElementById('ANT').value);
    var chestrt = parseFloat(document.getElementById('CHESTRT').value);
    var result = calcRisk(ef, ant, chestrt);
    var percent = (result * 100).toFixed(0) + "%";
    var resultDiv = document.getElementById('results');
    resultDiv.innerHTML = "<h2>Result</h2><p>You have a " + percent + " risk of getting cardiomyopathy</p>";
}