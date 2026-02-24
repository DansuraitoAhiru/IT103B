const squad = [
    ["Nguyen Van A", 10, "FW"],

    ["Tran Van B", 5, "MF"],

    ["Le Van C", 2, "DF"],

    ["Pham Van D", 12, "FW"],

    ["Hoang Van E", 0, "GK"],

    ["Dang Van F", 7, "MF"],

];
let choice;
let search;

do {
    choice=+prompt(`--- QUẢN LÝ ĐỘI BÓNG ---
1. Xem danh sách
2. Tìm kiếm
3. Lọc vị trí
4. Tổng bàn thắng
5. Kiểm tra hiệu suất
0. Thoát
Vui lòng nhập lựa chọn:`);
    switch(choice){
        case 0:
            alert(`Hẹn gặp lại!`);
            break;
        case 1:
            console.log(`Danh sách cầu thủ:`);
            squad.map((element) => {
                console.log(`Tên: ${element[0]} (${element[2]}): ${element[1]} bàn thắng`); 
            });
            break;
        case 2:
            search=prompt("Nhập tên cầu thủ").trim().toLowerCase();
            const found=squad.find((element) => element[0].toLowerCase() === search);
            if(found){
                alert(`Tìm thấy cầu thủ!`);
                console.log(`Tìm thấy cầu thủ:`);
                console.log(`${found[0]} (${found[2]}): ${found[1]} bàn thắng`);
            } else {
                alert(`Ko tìm thấy cầu thủ này!`);
            }
            break;
        case 3:
            let position=prompt("Nhập vị trí cần lọc (Ví dụ: FW, MF, DF, GK):").trim().toUpperCase();
            const newFound=squad.filter((element) => element[2]===position);
            if(newFound.length>0){
                alert(`F12 để xem!`);
                console.log(`Danh sách cầu thủ có vị trí ${position.toUpperCase()}:`);
                newFound.forEach((player) => {
                    console.log(`${player[0]} (${player[2]}): ${player[1]} bàn thắng`);
                });
            } else {
                alert(`Ko tìm thấy cầu thủ ở vị trí ${position}`);
            }
            break;
        case 4:
            const sum=squad.reduce((previous, current) =>  previous + current[1], 0);
            alert(`F12 để xem!`);
            console.log(`Tổng số bàn thắng hiện tại là: ${sum}`)
            break;
        case 5:
            const notAllScored=squad.some((element) => element[1] <= 0);
            if(notAllScored){
                alert("Có cầu thủ chưa ghi bàn");
                console.log("Có cầu thủ chưa ghi bàn");
            }
            const allScored=squad.every((element) => element[1] > 0);
            if(allScored){
                alert("Tất cả cầu thủ đều đã ghi bàn");
                console.log("Tất cả cầu thủ đều đã ghi bàn");
            }
            break;
        default:
            alert(`Ko có lựa chọn ${choice}`);
            break;
    }
} while(choice != 0);