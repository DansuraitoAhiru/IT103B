const players = [
    "Messi - Forward - 25 - 15 - 34",
    "Ronaldo - Forward - 30 - 10 - 38",
    "Neymar - Forward - 18 - 20 - 32",
    "De Bruyne - Midfielder - 8 - 25 - 35",
    "Kante - Midfielder - 2 - 5 - 36",
    "Van Dijk - Defender - 5 - 3 - 33",
    "Alison - Goalkeeper - 0 - 1 - 37",
];
let minGoals=3;

const reportByPosition=(players) => {
    const positions = ["Forward", "Midfielder", "Defender", "Goalkeeper"];
    positions.forEach(position => {
        const list=players.filter((element) => {
            let part=element.split(" - ");
            let goals=Number(part[2]);
            return part[1] === position && goals>=minGoals;
        });

        let totalGoals=0;
        let totalAssists=0;
        let totalMatches=0;

        list.forEach((element) => {
            const part=element.split(" - ");
            totalGoals+=Number(part[2]);
            totalAssists+=Number(part[3]);
            totalMatches+=Number(part[4]);
        });

        let avg=((totalGoals+totalAssists)/totalMatches).toFixed(2);
        console.log(`Vị trí: ${position}`);
        console.log(`Số lượng cầu thủ: ${list.length}`);
        console.log(`Tổng bàn thắng: ${totalGoals}`);
        console.log(`Tổng kiến tạo: ${totalAssists}`);
        console.log(`Tổng số trận: ${totalMatches}`);
        console.log(`Hiệu suất trung bình mỗi trận: ${avg}`);
    });
}
reportByPosition(players);
console.log(`----------------------------------------`);
const sum = players.reduce((pre, curr) => {
    const part = curr.split(" - ");
    return pre + Number(part[2]);
}, 0);
console.log(`Tổng số bàn thắng toàn đội: ${sum}`);