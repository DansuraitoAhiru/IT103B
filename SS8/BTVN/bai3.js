const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alison - Goalkeeper",
];

const filterPlayersByPosition=((position, players) => {
    return players.filter((element) => element.split("-")[1].trim() === position);
});
console.log(filterPlayersByPosition("Forward", players));
console.log(filterPlayersByPosition("Midfielder", players));
console.log(filterPlayersByPosition("Defender", players));
console.log(filterPlayersByPosition("Goalkeeper", players));