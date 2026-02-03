let booksId=[];
let booksName=[];
let bookStatus=[];
let books;
let id;
let name;
let status;
let choice;
let detail="";
let fixedCount=0;
let deletedCount=0;
let found;

do{
    books=Number(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay? (số nguyên dương)"));
} while(!Number.isInteger(books) || books<=0);

for(let i=1;i<=books;i++){
    do{
        id=prompt(`Nhập mã sách thứ ${i} (ko được để trống):`).trim().toUpperCase();
    } while(id==="");
    booksId.push(id);

    do {
        name=prompt(`Nhập tên sách thứ ${i} (ko được để trống):`).trim();
    } while(name==="");
    booksName.push(name);

    do {
        status=Number(prompt(`Nhập tình trạng ban đầu (chọn số 1–3): \n1 → "Hỏng nhẹ" \n2 → "Hỏng nặng" \n3 → "Cần sửa gấp"`).trim());
        if(status===1){
            detail="Hỏng nhẹ";
        } else if(status===2){
            detail="Hỏng nặng";
        } else {
            detail="Cần sửa gấp";
        }
    } while(!Number.isInteger(status) || status<1 || status>3);
    bookStatus.push(detail);
}

console.log(`Danh sách ban đầu (${booksId.length} cuốn):`);
for(let i=0;i<booksId.length;i++){
    console.log(`${i+1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`);
}

do {
    choice=Number(prompt("1: Sửa tình trạng một cuốn sách \n2: Loại bỏ (xóa) một cuốn sách khỏi danh sách \n0: Kết thúc và in báo cáo cuối \nVui lòng nhập lựa chọn:").trim());
    switch(choice){
        case 1:
            let idChange=prompt("Nhập mã sách cần sửa:").trim().toUpperCase();
            found=0;
            for(let i=0;i<books;i++){
                if(idChange===booksId[i]){
                    let newStatus;
                    do {
                        newStatus=Number(prompt("Chọn tình trạng mới (1–5): \n1: Hỏng nhẹ \n2: Hỏng nặng \n3: Cần sửa gấp \n4: Đã sửa xong \n5: Loại bỏ").trim());
                    } while(!Number.isInteger(newStatus) || newStatus<1 || newStatus>5);
                    if(newStatus===1){
                        detail="Hỏng nhẹ";
                    } else if(newStatus===2){
                        detail="Hỏng nặng";
                    } else if(newStatus===3){
                        detail="Cần nửa gấp";
                    } else if(newStatus===4){
                        detail="Đã sửa xong";
                        fixedCount++;
                    } else {
                        detail="Loại bỏ";
                        deletedCount++;
                    }
                    bookStatus[i]=detail; 
                    found=1; 
                    break;
                }
            }
            if(!found){
                alert(`Ko tìm thấy mã sách!`);
            }
            console.log(`Danh sách hiện tại (${booksId.length} cuốn):`);
            for(let i=0;i<booksId.length;i++){
                console.log(`${i+1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`);
            }
            break;
        case 2:
            let idDelete=prompt("Nhập mã sách cần xóa:").trim().toUpperCase();
            found=0;
            for(let i=0;i<booksId.length;i++){
                if(idDelete===booksId[i]){
                    booksId.splice(i, 1);
                    booksName.splice(i, 1);
                    bookStatus.splice(i, 1);
                    found=1;
                    break;
                }
            }
            if(!found){
                alert(`Ko tìm thấy mã sách!`);
            }
            break;
        case 0:
            alert(`Hệ thống thoát! Cảm ơn và hẹn gặp lại!`);
            console.log(`------------ Báo cáo cuối ------------`)
            console.log(`Tổng số sách còn lại: ${booksId.length}`);
            console.log(`Số sách đã "Đã sửa xong": ${fixedCount}`);
            console.log(`Số sách "Loại bỏ": ${deletedCount}`);
            console.log(`Danh sách các sách còn lại (nếu có)`);
            for(let i=0;i<booksId.length;i++){
                console.log(`${i+1}. ${booksId[i]} - ${booksName[i]}`);
            }
            break;
        default:
            alert(`Vui lòng chọn chức năng 0-2!`);
            break;
    }
} while(choice !== 0);