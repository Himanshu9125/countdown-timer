document.addEventListener("DOMContentLoaded", function () {
    const enddate = "20 February 2024 00:00:00";
    document.getElementById("end_date").innerText = "Countdown to " + enddate;
    const inputs = document.querySelectorAll("input");

    function clock() {
        const end = new Date(enddate);
        const now = new Date();
        const diff = (end - now) / 1000;

        inputs[0].value = Math.floor(diff / 86400);
        inputs[1].value = Math.floor(diff % 86400 / 3600);
        inputs[2].value = Math.floor(diff % 3600 / 60);
        inputs[3].value = Math.floor(diff % 60);
    }

    setInterval(clock, 1000);
    clock();
});