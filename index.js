$(document).ready(function() {
    $.getJSON("http://jsonip.com/?callback=?", function(data) {
        console.log(data);
        var d = new Date();
        if (data.ip = "2601:603:1a80:c430:3923:c3e2:7665:a656" && d.getMonth() == 4 && d.getDay() == 0 && d.getDate() > 7 && d.getDate() < 14) {
            mothersDay();
            alert("Happy Mother's Day!");
        }
    });
});

function mothersDay() {

}