let users = [
  {id:1,name:"Nguyễn Văn An",phone:"0901234567",email:"nguyenvanan@email.com"},
  {id:2,name:"Trần Thị Bình",phone:"0912345678",email:"tranthibinh@email.com"},
  {id:3,name:"Lê Văn Cường",phone:"0923456789",email:"levancuong@email.com"},
  {id:4,name:"Phạm Thị Dung",phone:"0934567890",email:"phamthidung@email.com"},
  {id:5,name:"Hoàng Văn Em",phone:"0945678901",email:"hoangvanem@email.com"}
];

let idUpdate=null;

const form=document.querySelector("#contact-form");
const contactBody=document.querySelector("#contact-tbody");
const btnSubmit=document.querySelector(".btn-add");

const nameInput = document.querySelector("#contact-name");
const phoneInput = document.querySelector("#contact-phone");
const emailInput = document.querySelector("#contact-email");


const render = (users) => {
    let userMaps = users.map((user) => {
        return `<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.phone}</td>
                    <td>${user.email}</td>
                    <td>
                        <button class="btn-edit" onclick="edit(${user.id})">Sửa</button>
                        <button class="btn-delete" onclick="remove(${user.id})">Xóa</button>
                    </td>
                </tr>`;
    });

    const html=userMaps.join("");
    contactBody.innerHTML = html;
};


const edit=(id) => {
    const found=users.find(u => u.id === id);
    if (!found) return;

    idUpdate=id;

    nameInput.value=found.name;
    phoneInput.value=found.phone;
    emailInput.value=found.email;

    btnSubmit.textContent = "Cập nhật";
};


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;

    if (idUpdate) {
        const found = users.find(u => u.id === idUpdate);
        if (!found) return;

        found.name = name;
        found.phone = phone;
        found.email = email;

        idUpdate = null;
        btnSubmit.textContent = "Thêm";
    } 

    form.reset();
    render(users);
});

const remove=(id) => {
    if(!confirm("Xóa thật không?")) return;

    users = users.filter(u => u.id !== id);

    render(users);
};

render(users);
