let choice;
let squad = [

    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },

    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },

    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },

    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },

    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }

];

/**
 * Hàm hiển thị danh sách cầu thủ
 * @param {} squads Mảng chứa danh sách cầu thủ
 * @author NVQUY (26/02/2026); 
 */
const renderData=(squads) => {
    squads.forEach((squad) => {
        console.log(`Mã: [${squad.id}] - [${squad.name}] ([${squad.position}]): [${squad.goals}] bàn`);
    })
};

/**
 * Hàm thêm mới cầu thủ
 * @param {*} squads Mảng chứa danh sách cầu thủ thêm
 * @param {*} player Thông tin cầu thủ thêm
 */
const creatPlayer=(squads, player) => {
    squads.push(player);
};


/**
 * Hàm tìm id cầu thủ
 * @param {*} squads Mảng chứa danh sách cầu thủ muốn tìm
 * @param {*} id id cần tìm
 * @returns trả lại id trùng với cầu thủ, để in thông tin
 */
const findPlayer=(squads,id) => {
    return squads.find((player) => player.id === id);
};

/**
 * Hàm cập nhật bàn thắng cầu thù
 * @param {*} squads Mảng chứa danh sách cầu thủ muốn update
 * @param {*} id id cầu thủ muốn cập nhật
 */
const updateGoals=(squads, id) => {
    const playerIndex=squads.findIndex((player) => player.id === id);
    if(playerIndex !== -1){
        const goals=+prompt("Nhập số bàn thắng mới:");
        squads[playerIndex].goals=goals;
        alert(` Đã cập nhật bàn thắng cho cầu thủ ${squads[playerIndex].name} thành ${goals} bàn`);
    } else {
        alert(`Ko tìm thấy cầu thủ!`);
    }
};

const deletePlayer=(squads, id) => {
    const foundIndex=squads.findIndex((player) => player.id === id);
    if(foundIndex !== -1){
        const deletedPlayer= squads[foundIndex];
        squads.splice(foundIndex, 1);
        alert(`Đã chuyển nhượng cầu thủ ${deletedPlayer.id} - ${deletedPlayer.name}`);
    } else {
        alert(`Ko tìm thấy cầu thủ này!`);
    }
};

do {
    choice=+prompt(`--- FOOTBALL MANAGER PRO ---
1. Xem đội hình
2. Thêm cầu thủ
3. Tìm kiếm (theo ID)
4. Cập nhật bàn thắng
5. Xóa cầu thủ (Chuyển nhượng)
0. Thoát
Vui lòng nhập lựa chọn của bạn:`);
    
    switch(choice){
        case 0:
            alert(`またね！`);
            break;
        case 1:
            console.log(`Danh sách cầu thủ:`);
            renderData(squad);
            break;
        case 2:
            const id=squad.length+1; //id tự tăng
            const name=prompt("Nhập tên cầu thủ:").trim();
            const goals=+prompt("Nhập số bàn thắng:");
            const position=prompt("Nhập vị trí:").trim().toUpperCase();

            // Gom tất cả thông tin trên thành 1 đối tượng
            const newPlayer={
                id,
                name,
                position,
                goals,
            }
            creatPlayer(squad, newPlayer);
            break;
        case 3:
            const searchId=+prompt("Nhập mã cầu thủ cần tìm:");
            const found=findPlayer(squad, searchId);
            if(found){
                console.log(`Tìm thấy cầu thủ ${searchId}`);
                console.log(`Mã: [${found.id}] - [${found.name}] ([${found.position}]): [${found.goals}] bàn`);
            } else {
                alert(`Ko tìm thấy cầu thủ mã ${searchId}`);
            }
            break;
        case 4:
            const playerIdUpdate=+prompt("Nhập mã cầu thủ muốn sửa:");
            updateGoals(squad, playerIdUpdate);
            break;
        case 5:
            const deleteId=+prompt("Nhập mã cầu thủ cần xóa:");
            deletePlayer(squad, deleteId);
            break;
        default:
            alert(`Vui lòng chọn từ 0 đến 5`);
            break;
    }
} while(choice != 0);