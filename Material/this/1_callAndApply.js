'use strict'
let teamIndia = {
    team: "India",
    captain: "Kohli ji ka ladka",
    viceCaptain: "Sharma ji ka ladka"
};

let teamBangaladesh = {
    "team": "Bangaladesh",
    captain: "Mortaza",
    viceCaptain: "Rehman"
}

function teamDetail(homeJersey) {
    return `Team ${this.team} captained by ${this.captain} with HomeJersy${homeJersey} `;
}

function announcement() {
    console.log(this);
    teamDetail(true);
    let team1 = teamDetail.call(teamIndia, false);
    let team2 = teamDetail.apply(teamBangaladesh, [true]);
    console.log(`Today's match is between ${team1} against  ${team2}`)
}

announcement();

