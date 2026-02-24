const playerNames = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alison",
];

const getUpperNames=playerNames.map((element) => {
    return element.toUpperCase();
});
console.log(getUpperNames)