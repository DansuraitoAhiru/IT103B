let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];
let letter;

let getAllPositions=() => {
    let position=[];
    for(let i=0;i<players.length;i++){
        let part=players[i].split("-");
        if(!position.includes(part[2])){
            position.push(part[2]);   
        }
    }
    console.log(`${position.join(", ")}`);
}
getAllPositions();

let findPlayersWithLongestName=() => {
    let max=0;
    let longestName="";
    for(let i=0;i<players.length;i++){
        let part=players[i].split("-");
        let name=part[1];
        if(name.length>max){
            max=name.length;
            longestName=name;
        }
    }
    console.log(`Cầu thủ có tên dài nhất là: ${longestName}`);
}
findPlayersWithLongestName();

let countPlayersStartingWithLette=(letter) =>{
    let count=0;
    for(let i=0;i<players.length;i++){
        let part=players[i].split("-");
        let name=part[1];
        if(name.toLowerCase().startsWith(letter.toLowerCase())){
            count++;
        }
    }
    console.log(`Có ${count} cầu thủ bắt đầu bằng chữ ${letter}`);
}
countPlayersStartingWithLette("v");