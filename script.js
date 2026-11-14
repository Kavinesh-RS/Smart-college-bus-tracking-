
const bus = document.getElementById("bus");

bus.addEventListener("change", function() {
    document.getElementById("busName").textContent =
        bus.value;
});

function updateBus() {
    const arrival = Math.floor(Math.random() * 20) + 5;

    document.getElementById("arrival").textContent =
        arrival + " minutes";

    alert("Bus status refreshed!");
}
