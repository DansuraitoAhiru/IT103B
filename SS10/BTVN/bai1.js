const player = {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
};

const showPlayerInfo=(player) => {
    console.log("Tên:", player.name);
    console.log("\nVị trí:", player.position);
    console.log("\nTuổi:", player.age);
    console.log("\nBàn thắng mùa này:", player.goals);
    console.log("\nKiến tạo mùa này:", player.assists);
    console.log("\nTổng đóng góp:", player.goals + player.assists);
};
showPlayerInfo(player);