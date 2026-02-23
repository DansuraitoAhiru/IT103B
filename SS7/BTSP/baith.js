const addPlayer=() => {
    let name=prompt("Nhập tên cầu thủ:").trim();
    if(name===""){
        alert(`Ko được để trống bé ơi! Vui lòng nhập thông tin!`);
        return;
    }
    playerList.push(name);
    let goal= +prompt("Nhập số bàn thắng:").trim();
    goalsArray.push(goal);
    alert(`Đã thêm cầu thủ ${name} thành công`);
}

const showSquad=() => {
    for(let i=0;i<playerList.length;i++){
        console.log(`${i+1}. ${playerList[i]} - ${goalsArray[i]} bàn`);
    }
}

const getTotalGoals = function() {
    let sum=0;
    for(let i=0;i<goalsArray.length;i++){
        sum+=goalsArray[i];
    }
    return sum;
};

const findMostGoals=() => {
    let max=0;
    for(let i=0;i<goalsArray.length;i++){
        if(goalsArray[i]>goalsArray[max]){
            max=i;
        }
    }
    return max;
}

let playerList=[]; 
let goalsArray=[];
let choice;
do {
    choice= +prompt(`--- MENU QUẢN LÝ ĐỘI BÓNG ---
1. Nhập cầu thủ mới
2. Xem danh sách đội hình
3. Xem thành tích toàn đội
4. Tìm Vua phá lưới
0. Thoát
Vui lòng nhập lựa chọn:`);

    switch(choice){
        case 0:
            alert(`Thoát hệ thống! Hẹn gặp lại!`);
            break;
        case 1:
            addPlayer();
            break;
        case 2:
            showSquad();
            alert(`Vui lòng mở console (F12)`);
            break;
        case 3:
            let totalGoals=getTotalGoals();
            alert(`Vui lòng mở console (F12)`);
            console.log(`Tổng số bàn thắng của cả đợi là: ${totalGoals}`);
            break;
        case 4:
            let most=findMostGoals();
            alert(`Đã tìm ra vua phá lưới! Mở F12 đê!`);
            console.log(`Vua phá lưới ${playerList[most]} hiện tại ghi được: ${goalsArray[most]} bàn.`);
            break;
        default:
            alert(`Ko có lựa chọn ${choice}`);
            break; 
    }
} while (choice !=0);
