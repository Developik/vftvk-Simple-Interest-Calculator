function compute() {

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result_deposit").innerText = principal + ",";
    document.getElementById("result_rate").innerText = rate + "%.";
    document.getElementById("result_amount").innerText = parseFloat(interest) + ",";
    document.getElementById("result_year").innerText = year;

    if (parseInt(principal) <= 0) {
        confirm("Enter a positive number");
        document.getElementById("principal").focus();
    }


}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
