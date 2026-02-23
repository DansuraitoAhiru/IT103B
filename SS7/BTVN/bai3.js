let players=[];
let number;
let id,name,position;
let role=["Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];
do {
    number= +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng? (số nguyên dương)");
} while(number<=0);

for(let i=0;i<number;i++){
    do {
        id=prompt("Nhập mã cầu thủ:").trim().toUpperCase();
    } while(id==="");

    for(let j=0;j<players.length;j++){
        if(players[j].split("-")[0]===id){
            alert(`Mã bị trùng!`);
            id=prompt('Nhập lại mã cầu thủ:');
            j=-1;
        }
    }
    do{
        name=prompt("Nhập tên cầu thủ:").trim();
    } while(name==="");
    
    do{
        position= +prompt("Nhập vị trí (chọn số: 1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo):");
    } while(position<1 || position>4);
    players.push(id + "-" + name + "-" + role[position-1]);
}

let printTeamRoster=() => {
    for(let i=0;i<players.length;i++){
        let part=players[i].split("-");
        console.log(`${i+1}. ${part[0]} - ${part[1]} - ${part[2]}`);
    }
}


let pushPlayer=(name,position) => {
    players.push(id + "-" + name + "-" + role[position-1]);
}
printTeamRoster()