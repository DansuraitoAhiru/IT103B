let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];
let goalKeeper=0;
let striker=0;
let defender=0;
let midfielder=0;

let printTeamRoster=() =>{
    for(let i=0;i<players.length;i++){
        let part=players[i].split("-");
        console.log(`${i+1}. ${part[0]} | ${part[1]} | ${part[2]}`);
    }
}
printTeamRoster();

let countPlayerByPostion=(players) => {
    for(let i=0;i<players.length;i++){
        let part=players[i].split("-");
        if(part[2]==="Thủ môn"){
            goalKeeper++;
        } else if(part[2]==="Tiền đạo"){
            striker++;
        } else if(part[2]==="Hậu vệ"){
            defender++;
        } else if(part[2]==="Tiền vệ"){
            midfielder++;
        }
    }
    console.log(`Tiền đạo: ${striker}, Tiền vệ: ${midfielder}, Hậu vệ: ${defender}, Thủ môn: ${goalKeeper}`);
}
countPlayerByPostion(players);

let hasGoalkeeper=() =>{
    for(let i=0;i<players.length;i++){
        let part=players[i].split("-");
        if(part.includes("Thủ môn")===true){
            console.log(`True!`);
            return;
        }
    }
    console.log(`False!`);
}
hasGoalkeeper();