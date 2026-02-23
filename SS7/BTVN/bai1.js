let playerIds=[];
let playerPositions=[];
let id;
let position;
let players;
let role=["Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];
do {
    players= +prompt(`Có bao nhiêu cầu thủ cần nhập vào đội bóng? (số nguyên dương)`);
} while(players <=0);

for(let i=0;i<players;i++){
    do {
        id=prompt("Nhập mã cầu thủ:").trim().toUpperCase();
        if(playerIds.includes(id)===true){
            alert(`Mã bị trùng`);
        }
    } while (id==="" || playerIds.includes(id));
    playerIds.push(id);

    do{
        position= +prompt("Nhập vị trí (chọn số: 1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo):").trim();
    } while(!Number.isInteger(position) || position<1 || position>4);
    playerPositions.push(position);
}

const printTeamRoster=() => {
    for(let i=0;i<playerIds.length;i++){
        console.log(`${i+1}. ${playerIds[i]} - ${role[playerPositions[i]-1]}`);
    }
}
alert(`Đã cập nhật thành công! Mở F12 đê`);
printTeamRoster();

const findPlayersByPosition=(position) => {
    let index=[];
    for(let i=0;i<playerPositions.length;i++){
        if(playerPositions[i]===position){
            index.push(i);
        }
    }
    console.log(`Số cầu thủ ở vị trí ${role[position-1]}: ${index.length}`);
    console.log(`Các chỉ số cầu thủ ở vị trí ${role[position-1]}: ${index.join(",")}`);   
}

findPlayersByPosition(1);
findPlayersByPosition(2);
findPlayersByPosition(3);
findPlayersByPosition(4);