let homeScore = document.getElementById("home-points")
let guestScore = document.getElementById("guest-points")

let count1 = 0
let count2 = 0

 function add1h() {
    count1+= 1
    homeScore.textContent = count1
}

function add2h() {
    count1 += 2
    homeScore.textContent = count1 
}

function add3h() {
    count1 += 3
    homeScore.textContent = count1
}

function add1g() {
    count2 += 1
    guestScore.textContent = count2 
}

function add2g() {
    count2 += 2
    guestScore.textContent = count2 
}

function add3g() {
    count2 += 3
    guestScore.textContent = count2 
}

function refreshPage(){
    window.location.reload();
}

