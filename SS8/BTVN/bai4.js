const players = [
    "Messi - Forward - 25",
    "Ronaldo - Forward - 30",
    "Neymar - Forward - 18",
    "De Bruyne - Midfielder - 8",
    "Kante - Midfielder - 2",
    "Van Dijk - Defender - 5",
    "Alison - Goalkeeper - 0",
];

const getReversedNames=(players) => {
    return players.map((element) => element.split("-")[0]).reverse();
}
console.log(`Danh sách cầu thủ bị đảo ngược:`, getReversedNames(players));