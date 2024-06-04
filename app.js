
function tipCalculate() {
    let billamount = document.getElementById("bill").value;
    let tipamount = document.getElementById("tip").value;
    let total = document.getElementById("total");
    if ( billamount.value = "") {
        alert("plese enter your amont");
    }
    else {   
        let sum =  billamount * (1 + tipamount / 100);
        total.innerText = `${sum}`;

}
