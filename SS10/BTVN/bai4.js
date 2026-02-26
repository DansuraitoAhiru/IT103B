const players = [
    { name: "Messi", years: 18, salary: 100 },
    { name: "Ronaldo", years: 20, salary: 95 },
    { name: "Neymar", years: 12, salary: 90 },
    { name: "Mbappe", years: 7, salary: 85 },
    { name: "Haaland", years: 5, salary: 80 },
    { name: "Modric", years: 22, salary: 70 },
    { name: "Benzema", years: 19, salary: 75 },
];

const analyzeSalary=(minYears, teamPlayers) => {
    const qualifiedPlayer=teamPlayers.filter((player) => player.years >= minYears);
    if(qualifiedPlayer.length===0){
        return {
            totalSalary: 0,
            highestSalaryPlayer: null,
            lowestSalaryPlayer: null
        };
    }

    const totalSalary=qualifiedPlayer.reduce((prev, player) => prev + player.salary, 0);
    const highestPaid=qualifiedPlayer.reduce((max, player) => {
        if(player.salary>max.salary){
            return player;
        }
        return max;
    });
    const lowestPaid=qualifiedPlayer.reduce((min, player) => {
        if(player.salary<min.salary){
            return player;
        }
        return min;
    });
    return {
        totalSalary,
        highestPaid,
        lowestPaid
    };
};
let result=analyzeSalary(20, players);
Object.entries(result).forEach(([key, value]) => {
    console.log(`${key}:`, value);
});