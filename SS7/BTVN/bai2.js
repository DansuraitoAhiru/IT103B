let playerIds=["P001", "P002", "P003", "P004", "P005"];
let playerNames=["Nguyễn Văn A", "Trần Thị B", "Lê Văn C", "Phạm Văn D", "Hoàng Thị E"];
let playerJerseyNumbers=[10, 7, 8, 9, 11];

let printTeamRoster=() => {
    for(let i=0;i<playerIds.length;i++){
        console.log(`${i+1}. ${playerIds[i]} - ${playerNames[i]} - Số áo ${playerJerseyNumbers[i]}`);
    }
}

let updatePlayerNameAndJersey=(playerId, newName, newJerseyNumber) => {
    let id=prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001): ").trim().toUpperCase();
    let index=playerIds.indexOf(id);
    if(index===-1){
        alert(`Không tìm thấy cầu thủ với mã này!`);
    } else {
        let newName=prompt("Nhập tên mới cho cầu thủ:");
        playerNames[index]=newName;
        let newNumber;
        do {
            newNumber=+prompt("Nhập số áo mới:");
        } while(!Number.isInteger() || newNumber<1 || newNumber>99);
        playerJerseyNumbers[index]=newNumber;
        printTeamRoster();
    }
}
updatePlayerNameAndJersey();