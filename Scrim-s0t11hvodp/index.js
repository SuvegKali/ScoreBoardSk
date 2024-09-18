homeScreenScore = document.getElementById("home-screen-score")

guestScreenScore = document.getElementById("guest-screen-score")

function incrementCounterOneHome(){
    let currentScore = parseInt(homeScreenScore.textContent)
    homeScreenScore.textContent = currentScore + 1
}

function incrementCounterTwoHome(){
    let currentScore = parseInt(homeScreenScore.textContent)
    homeScreenScore.textContent = currentScore + 2
}

function incrementCounterThreeHome(){
    let currentScore = parseInt(homeScreenScore.textContent)
    homeScreenScore.textContent = currentScore + 3
}


function incrementCounterOneGuest(){
    let currentScore = parseInt(guestScreenScore.textContent)
    guestScreenScore.textContent = currentScore + 1
}

function incrementCounterTwoGuest(){
    let currentScore = parseInt(guestScreenScore.textContent)
    guestScreenScore.textContent = currentScore + 2
}

function incrementCounterThreeGuest(){
    let currentScore = parseInt(guestScreenScore.textContent)
    guestScreenScore.textContent = currentScore + 3
}