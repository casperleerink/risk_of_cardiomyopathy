

function calcRisk(ef, ant, chestrt) {
    var c1 = -0.226519184;
    var c2 = 0.003633632;
    var c3 = 0.051286179;
    var c4 = -11.67149;
    var c5 = 0.009061703;
    var result = (1.0 - Math.exp( -1.0*( Math.exp(((ef*c1)+(ant * c2)+(chestrt * c3)) - c4) *  (c5) )));
    
    return result;
}

function getResult() {
    var ef = parseFloat(document.getElementById('EF').value);
    var ant = parseFloat(document.getElementById('ANT').value);
    var chestrt = parseFloat(document.getElementById('CHESTRT').value);
    var result = calcRisk(ef, ant, chestrt);
    var percent = (result * 100).toFixed(2) + "%";
    var resultSpan = document.getElementById('results');
    resultSpan.innerHTML = percent;
    var resultDiv = document.getElementById('resultDiv');
    resultDiv.className = "show";
}
