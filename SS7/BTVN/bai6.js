let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];
let length;

let getShortestPlayerName=() => {
    let shortestName="";
    let min=99999;
    for(let i=0;i<players.length;i++){
        let part=players[i].split("-");
        let name=part[1];
        if(name.length<min){
            min=name.length;
            shortestName=name;
        }
    }
    console.log(`Cầu thủ có tên ngắn nhất là: ${shortestName}`);
}
getShortestPlayerName();

let countPlayersWithPositionLengthGreaterThan=(length) => {
    let count=0;
    for(let i=0;i<players.length;i++){
        let part=players[i].split("-");
        let name=part[1];
        if(name.length>length){
            count++;
        }
    }
    console.log(`Có ${count} cầu thủ có tên dài hơn ${length}`)
}
countPlayersWithPositionLengthGreaterThan(10);