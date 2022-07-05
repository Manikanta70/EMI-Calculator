let loanAmt = document.getElementById("loanamt");
let loanRate = document.getElementById("rate");
let loanTime = document.getElementById("repay");
let submitEl = document.getElementById("submit");
let resetEl = document.getElementById("reset");
let loanError = document.getElementById("amterror");
let rateError = document.getElementById("raterror");
let timeError = document.getElementById("timeerror");

function callLoanEMI() {
    let r = loanRate.value;
    if (loanAmt.value == "" || loanRate.value == "" || loanTime.value == "") {
        alert("Please fill the required field(s)");
    } else {
        if (r < 0 || r > 100) {
            alert("Please enter valid interest rate");
        }
        if (loanAmt.value < 0 || loanRate.value < 0 || loanTime.value < 0) {
            alert("Input cannot be negative");
        } else {
            if (loanTime.value > 15) {
                alert("Loan period cannot exceed 15 years");
            } else {
                let principal = parseInt(loanAmt.value);
                let rateofi = parseFloat(loanRate.value) / 12 / 100;
                let period = parseFloat(loanTime.value) * 12;
                let temp = Math.pow(1 + rateofi, period);
                let loanEmi = parseInt(Math.round((principal * rateofi * temp) / (temp - 1)));
                let totalAmnt = loanEmi * period;
                let totalint = totalAmnt - principal;
                document.getElementById("emi").textContent = "Rs." + loanEmi;
                document.getElementById("totalpay").textContent = "Rs." + totalAmnt;
                document.getElementById("totalemi").textContent = "Rs." + totalint;
            }
        }
    }
}

resetEl.addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("loanamt").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("repay").value = "";
    document.getElementById("emi").textContent = "";
    document.getElementById("totalpay").textContent = "";
    document.getElementById("totalemi").textContent = "";
});
submitEl.addEventListener("click", function(event) {
    event.preventDefault();
    callLoanEMI();
});
loanAmt.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        loanError.textContent = "Required**";
    } else {
        loanError.textContent = "";
    }
});
loanRate.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        rateError.textContent = "Required**";
    } else {
        rateError.textContent = "";
    }
});
loanTime.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        timeError.textContent = "Required**";
    } else {
        timeError.textContent = "";
    }
});