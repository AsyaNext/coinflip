window.onload = function () {
    let timerCounter = document.querySelectorAll('.table-games__data-item-timer-body-counter')
    let seconds = timerCounter[0].innerHTML

    timer = setInterval(function() {
        seconds--
        if (seconds >= 0) {
            timerCounter.forEach((item) => {
                item.innerHTML = seconds
            })
        } else {
            timerCounter.forEach((item) => {
                item.innerHTML = 0
            })
            clearInterval(timer)
        }
    }, 1000)
}
