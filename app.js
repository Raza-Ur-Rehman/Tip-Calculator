
function tipCalculate() {
    let billamount = document.getElementById("bill").value;
    let tipamount = document.getElementById("tip").value;
    let total = document.getElementById("total");

   let sum =  billamount * (1 + tipamount / 100);
   total.innerText = `${sum}`;

}
