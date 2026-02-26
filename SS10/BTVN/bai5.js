const teamHistory = [
  {
    name: "Messi",
    position: "Forward",
    nationality: "Argentina",
    seasons: {
      "2022-2023": { matches: 34, goals: 21, assists: 14, yellowCards: 3 },
      "2023-2024": { matches: 32, goals: 25, assists: 15, yellowCards: 2 },
      "2024-2025": { matches: 28, goals: 18, assists: 12, yellowCards: 1 },
    },
  },
  {
    name: "Ronaldo",
    position: "Forward",
    nationality: "Portugal",
    seasons: {
      "2022-2023": { matches: 38, goals: 28, assists: 8, yellowCards: 5 },
      "2023-2024": { matches: 35, goals: 30, assists: 10, yellowCards: 4 },
      "2024-2025": { matches: 30, goals: 22, assists: 9, yellowCards: 3 },
    },
  },
];
const generatePlayerSeasonReport=(playerName, teamHistory) => {
    const found=teamHistory.find((player) => player.name === playerName); // tìm cầu thủ trùng tên
    let totalMatches=0;  // tạo các biến đếm
    let totalGoals=0;
    let totalAssissts=0;
    let totalYellowCards=0;

    let bestSeason={  //Khởi tạo ban đầu cho mảng bestSesson
        season:"",
        goals: 0,
        assists: 0
    }

    const ss=Object.entries(found.seasons);  // vì seasons là object ko dùng đc forEach
    ss.forEach(([seasonName, stats]) => {      // dùng Object.entries để trả về 1 mảng, và forEach để duyệt qua các mùa
        totalMatches += stats.matches;         // [] ở đây là destructuring (phá cấu trúc) mảng tương đương seasons.forEach((item) => {
        totalGoals += stats.goals;                                                                       //     const seasonName = item[0];
        totalAssissts += stats.assists;                                                                  //     stats = item[1];
        totalYellowCards += stats.yellowCards;                                                           //});

        // Tìm mùa tốt nhất
        if(stats.goals>bestSeason.goals || (stats.goals===bestSeason.goals && stats.assists>bestSeason.assists)){
            bestSeason={
                season: seasonName,
                goals: stats.goals,
                assists: stats.assists
            };
        }
    });

    // Tính trung bình (làm tròn 2 chữ số)
    const averaveGoalsIsPerMatch=Number((totalGoals/totalMatches).toFixed(2));
    const averageAssistsPerMatch=Number((totalAssissts/totalMatches).toFixed(2));

    if(found){ // ktra nếu tìm thấy cầu thủ
        return {  //Trả về object báo cáo
            name: found.name,
            position: found.position,
            nationality: found.nationality,
            careerStats: {
                totalMatches,
                totalGoals,
                totalAssissts,
                totalYellowCards,
                averaveGoalsIsPerMatch,
                averageAssistsPerMatch,
                bestSeason,
            }
        }
    } else {
        alert(`Không tìm thấy cầu thủ ${playerName}`);
    }
};

let result=generatePlayerSeasonReport("Ronaldo", teamHistory);
Object.entries(result).forEach(([key, value]) => { 
    console.log(`${key}:`, value);
});