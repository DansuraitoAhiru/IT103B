console.log(`Hello bạn hiền! Chào mừng bạn đến với địa ngục!`);

// Vòng lặp for biết trước số vòng lặp
// for(Biến khởi tạo; Điều kiện; cập nhật biến khởi tạo)
for(let i=0, j=5;i<10 && j<=12;i++,j++){
    console.log(`Hello bạn đến với lầu xanh lần thứ ${i}`);
}

// Vòng lặp ko biết trước số vòng lặp
// while và do...white
// white
let n=0
while (n<=10) {
    if(n%2==0){
        console.log(`${n}`)
    }
    n++;
}

let pass;
let count=0;
while(pass != "123"){
    pass=prompt("Nhập mật khẩu: ");
    if (pass!="123"){
        console.log("Bạn đã nhập sai!")
        alert("Bạn đã nhập mật khẩu sai!");
        count++;
    }
    if(count==3){
        break;
    }
}
if(count==3){
    console.log("hết cứu");
    alert("hết cứu");
} else {
    console.log("bạn đã nhập đúng!")
    alert("Bạn đã nhập đúng!");
}

do{
    //code body
    //code bla bla
} while(count==3);

for(let khu=0;khu<3;khu++){
    for(let ke=0;ke<5;ke++){
        let result="";
        if(khu===2 && ke===3){
            result="Có ? ngồi";
        }
        console.log(`Khu: ${khu+1} - ke: ${ke+1} (${result})`);
    }
}