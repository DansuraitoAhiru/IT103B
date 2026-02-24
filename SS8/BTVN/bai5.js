const players = [
    "Messi - Forward - 25 - 15",
    "Ronaldo - Forward - 30 - 10",
    "Neymar - Forward - 18 - 20",
    "De Bruyne - Midfielder - 8 - 25",
    "Kante - Midfielder - 2 - 5",
    "Van Dijk - Defender - 5 - 3",
    "Alison - Goalkeeper - 0 - 1",
];

const reportTopPerformers=(minPerformance, players) => {
    const list=players.filter((element) => { // Lọc ra các cầu thủ đạt ngưỡng
        let part=element.split(" - ");
        let goals=Number(part[2]);
        let assists=Number(part[3]);
        let performance=goals+assists;
        return performance>=minPerformance;
    });

    let total=0;

    list.forEach((element) => { // Đây mới là để duyệt từng cầu thủ và tính tổng
        let part=element.split(" - ");
        let name=part[0];
        let goals=Number(part[2]);
        let assists=Number(part[3]);
        let performance=goals+assists;

        console.log(`${name}: ${performance}`);
        total+=performance;
    });
    console.log(`Tổng hiệu suất: ${total}`);
    return total;
}
reportTopPerformers(30,players);