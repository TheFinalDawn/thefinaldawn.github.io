var modal = document.getElementById("modal-mothers-day");
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://ipinfo.io/json", true);
xhr.send();
xhr.addEventListener("readystatechange", processRequest, false);
xhr.onreadystatechange = processRequest;

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response);
        var d = new Date();
        console.log(`Month: ${d.getMonth()}, day of the week: ${d.getDay()}, day of the month: ${d.getDate()}`);
        if (response.ip = "67.185.237.92" && d.getMonth() == 4 && d.getDay() == 0 && d.getDate() > 7 && d.getDate() < 14) {
            document.getElementById("modal-mothers-day").style.display = "block";
            alert("Happy Mother's Day!");
        }
    }
}
window.onclick = function(event) {
    if (event.target == document.getElementById("modal-mothers-day")) {
        document.getElementById("modal-mothers-day").style.display = "none";
    }
}