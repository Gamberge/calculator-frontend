let billInput = 0;
let tip = 0;
let numPerson = 1;

function getBill() {
    billInput = document.getElementById("numInput").value;
    if (billInput === '') {
        billInput = 0;
    } else {
        billInput = parseFloat(billInput);
    }
    calculateTotal(billInput);
}

function getTip() {
    let tip5 = document.getElementById("5percent");
    let tip10 = document.getElementById("10percent");
    let tip15 = document.getElementById("15percent");
    let tip25 = document.getElementById("25percent");
    let tip50 = document.getElementById("50percent");
    let tipCustom = document.getElementById("custom-btn");
    let tipCustomInput = document.querySelector(".inputCustom");

    tip5.addEventListener("click", function () {
        tip = 0.05;
        tip5.className = "";
        tip10.className = "";
        tip15.className = "";
        tip25.className = "";
        tip50.className = "";
        tipCustom.className = "";
        tip5.classList.add("active-button");
        tip10.classList.add("button");
        tip15.classList.add("button");
        tip25.classList.add("button");
        tip50.classList.add("button");
        tipCustom.classList.add("custom-btn");
        tipCustomInput.classList.add("inputCustom");
        tipCustomInput.classList.remove("inputCustomActive");
        calculateTotal(billInput);
    });

    tip10.addEventListener("click", function () {
        tip = 0.10;
        tip5.className = "";
        tip10.className = "";
        tip15.className = "";
        tip25.className = "";
        tip50.className = "";
        tipCustom.className = "";
        tip5.classList.add("button");
        tip10.classList.add("active-button");
        tip15.classList.add("button");
        tip25.classList.add("button");
        tip50.classList.add("button");
        tipCustom.classList.add("custom-btn");
        tipCustomInput.classList.add("inputCustom");
        tipCustomInput.classList.remove("inputCustomActive");
        calculateTotal(billInput);
    });

    tip15.addEventListener("click", function () {
        tip = 0.15;
        tip5.className = "";
        tip10.className = "";
        tip15.className = "";
        tip25.className = "";
        tip50.className = "";
        tipCustom.className = "";
        tip5.classList.add("button");
        tip10.classList.add("button");
        tip15.classList.add("active-button");
        tip25.classList.add("button");
        tip50.classList.add("button");
        tipCustom.classList.add("custom-btn");
        tipCustomInput.classList.add("inputCustom");
        tipCustomInput.classList.remove("inputCustomActive");
        calculateTotal(billInput);
    });

    tip25.addEventListener("click", function () {
        tip = 0.25;
        tip5.className = "";
        tip10.className = "";
        tip15.className = "";
        tip25.className = "";
        tip50.className = "";
        tipCustom.className = "";
        tip5.classList.add("button");
        tip10.classList.add("button");
        tip15.classList.add("button");
        tip25.classList.add("active-button");
        tip50.classList.add("button");
        tipCustom.classList.add("custom-btn");
        tipCustomInput.classList.add("inputCustom");
        tipCustomInput.classList.remove("inputCustomActive");
        calculateTotal(billInput);
    });

    tip50.addEventListener("click", function () {
        tip = 0.50;
        tip5.className = "";
        tip10.className = "";
        tip15.className = "";
        tip25.className = "";
        tip50.className = "";
        tipCustom.className = "";
        tip5.classList.add("button");
        tip10.classList.add("button");
        tip15.classList.add("button");
        tip25.classList.add("button");
        tip50.classList.add("active-button");
        tipCustom.classList.add("custom-btn");
        tipCustomInput.classList.add("inputCustom");
        tipCustomInput.classList.remove("inputCustomActive");
        calculateTotal(billInput);
    });

    tipCustom.addEventListener("click", function () {
        tip5.className = "";
        tip10.className = "";
        tip15.className = "";
        tip25.className = "";
        tip50.className = "";
        tipCustom.className = "";
        tip5.classList.add("button");
        tip10.classList.add("button");
        tip15.classList.add("button");
        tip25.classList.add("button");
        tip50.classList.add("button");
        tipCustom.classList.add("active-button");
        tipCustomInput.classList.remove("inputCustom");
        tipCustomInput.classList.add("inputCustomActive");
        let customTipValue = parseFloat(document.getElementById("inputCustom").value);
        tip = customTipValue / 100;
        calculateTotal(billInput);
    });

    tipCustomInput.addEventListener("click", function () { });
}

function getnumPerson() {
    numPerson = document.getElementById("peopleInput").value;
    calculateTotal(billInput);
}

function calculateTotal(total) {
    let tipOutput = document.querySelector('#tip-per-person-output');
    let totalOutput = document.querySelector('#total-per-person-output');
    tip1 = tip;
    tip1 *= total;
    tip1 /= numPerson;
    total = total + (total * tip);
    total = total / numPerson;
    total = total.toFixed(2);
    tipOutput.innerHTML = `$${tip1}`;
    totalOutput.innerHTML = `$${total}`;
}

document.getElementById("numInput").addEventListener("input", getBill);
document.getElementById("peopleInput").addEventListener("input", getnumPerson);

getBill();
getTip();