let pass;
let count=0;
let choice;
let totalBook;
let price;
let total=0;

do {
    pass=prompt("Nhập mật khẩu:");
    if(pass != "admin123"){
        console.log("Bạn đã nhập sai!")
        alert("Bạn đã nhập mật khẩu sai!");
        count++;
    } else {
        console.log(`Đăng nhập thành công!`)
        alert(`Đăng nhập thành công!`);

        do{
            choice=Number(prompt("Chọn chức năng: \n1 - Nhập lô sách mới \n2 - Vẽ sơ đồ kệ sách \n3 - Thoát"));

            switch(choice){
                case 1:
                    totalBook=Number(prompt("Bạn muốn nhập bao nhiêu cuốn sách?"));
                    for(let i=1;i<=totalBook;i++){
                        do{
                            price=Number(prompt(`Nhập giá tiền của cuốn sách ${i}:`));
                        } while(!Number.isInteger(price));
                        if(price<0 || price==0){
                            continue;
                        }
                        total+=price;
                    }
                    console.log(`Tổng giá trị nhập kho đợt này là: ${total} VNĐ`);
                    break;
                case 2:
                    for(let khu=1;khu<=3;khu++){
                        for(let ke=1;ke<=5;ke++){
                            let note="";
                            if(khu==2 && ke==3){
                                note="Đang sửa chữa";
                            }
                            console.log(`Khu vực ${khu} - Kệ ${ke} (${note})`);
                        }
                    }
                    break;
                case 3:
                    console.log(`Cảm ơn và hẹn gặp lại!`);
                    alert(`Cảm ơn và hẹn gặp lại!`);
                    break;
                default:
                    alert(`Chúng tôi ko cóa lựa chọn lày!`);
            }
        } while(!Number.isInteger(choice) || choice != 3);
    }
    if(count===3){
        break;
    }
} while(pass!="admin123");
if(count===3){
    console.log(`Hết cứu`);
    alert(`Hết cứu`);
}