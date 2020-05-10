var modal = $("#modal-mothers-day");
$(document).ready(function() {
    $.getJSON("https://jsonip.com/?callback=?", function(data) {
        console.log(data);
        var d = new Date();
        if (data.ip = "2601:603:1a80:c430:3923:c3e2:7665:a656" && d.getMonth() == 4 && d.getDay() == 0 && d.getDate() > 7 && d.getDate() < 14) {
            modal.style.display = "block";
            alert("Happy Mother's Day!");
        }
    });
});

var span = $("#modal-mothers-day-close");
span.onclick = () => {
    modal.style.display = none;
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}