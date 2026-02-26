const players = [
 { name: "Messi", position: "Forward", age: 36, goals: 25, assists: 15, matches: 34, yellowCards: 2 },
 { name: "Ronaldo", position: "Forward", age: 39, goals: 30, assists: 10, matches: 38, yellowCards: 4 },
 { name: "Neymar", position: "Forward", age: 32, goals: 18, assists: 20, matches: 32, yellowCards: 3 },
 { name: "De Bruyne", position: "Midfielder", age: 33, goals: 8, assists: 25, matches: 35, yellowCards: 1 },
 { name: "Kante", position: "Midfielder", age: 33, goals: 2, assists: 5, matches: 36, yellowCards: 0 },
 { name: "Van Dijk", position: "Defender", age: 33, goals: 5, assists: 3, matches: 33, yellowCards: 2 },
 { name: "Alisson", position: "Goalkeeper", age: 31, goals: 0, assists: 1, matches: 37, yellowCards: 0 }
];

const generateRankingReport=(minMatches, players) => {
    let ranking=[];
    let found=players.filter((player) => player.matches >= minMatches);
    found.forEach((element) => {
        const performanceScore=Number(((element.goals+element.assists)/element.matches).toFixed(2));
        const efficiencyScore=Number((performanceScore - (element.yellowCards / element.matches) * 10).toFixed(2));
        ranking.push({
            name: element.name,
            goals: element.goals,
            performanceScore,
            efficiencyScore
        });

    for (let i = 0; i < ranking.length; i++) {
        console.log(
        (i + 1) + ". " +
        ranking[i].name +
        " - Efficiency: " + ranking[i].efficiencyScore +
        " | Performance: " + ranking[i].performanceScore +
        " | Goals: " + ranking[i].goals
        );
    }
    }); 
    
    ranking.sort(function(a, b) {

        // Tiêu chí 1: efficiency cao hơn đứng trước
        if (b.efficiencyScore !== a.efficiencyScore) {
            return b.efficiencyScore - a.efficiencyScore;
        }

        // Tiêu chí 2: performance cao hơn đứng trước
        if (b.performanceScore !== a.performanceScore) {
            return b.performanceScore - a.performanceScore;
        }

        // Tiêu chí 3: goals cao hơn đứng trước
        if (b.goals !== a.goals) {
            return b.goals - a.goals;
        }

        // Tiêu chí 4: bằng hết → giữ nguyên
        return 0;
    });

    console.log(ranking);

};
generateRankingReport(10, players);
