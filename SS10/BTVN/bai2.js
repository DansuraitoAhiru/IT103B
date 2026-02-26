const player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35,
};

const addPerformanceScore=(player) => {
    const performancePerMatch=((player.goals+player.assists)/player.matchesPlayed).toFixed(2);
    player.performancePerMatch=performancePerMatch;
    player.isKeyPlayer=player.performancePerMatch >=0;
};
addPerformanceScore(player);
for (let key in player){
    console.log(key, ":", player[key]);
}