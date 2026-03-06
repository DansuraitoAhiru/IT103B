let employees=[
    { id: 1, name: "Dansuraito Ahiru", email: "ahiru69@gmail.com", dob: "23/05/2007", position: "CEO"},
    { id: 2, name: "Thái Phạm", email: "phamthoai@gmail.com", dob: "03/06/2036", position: "Leader"}
];
let currentId=1;
let isUpdate=null;

const form=document.querySelector("#form");
const nameInput=document.querySelector("#fullName");
const emailInput=document.querySelector("#email");
const dobInput=document.querySelector("#dateOfBirth");
const positionInput=document.querySelector("#position");

const tbody=document.querySelector("#tbody");
const footer=document.querySelector(".footer");
const badege=document.querySelector(".badge");
const title=document.querySelector("#mainTitle");
const formActions=document.querySelector(".form-actions")

const errorName=document.querySelector("#error-name");
const errorEmail=document.querySelector("#error-email");
const errorDob=document.querySelector("#error-dob");
const errorPosition=document.querySelector("#error-position");

const render=() => {
    let tr="";
    employees.forEach((e) => {
        tr += `
            <tr>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.email}</td>
                <td>${e.dob}</td>
                <td>${e.position}</td>
                <td class=actions> <button class="btn-edit" data-id="${e.id}">Sửa</button> <button class="btn-delete" data-id="${e.id}>Xóa<button> </td>
            </tr>
        `;
    });
    tbody.innerHTML=tr;
};

const validateForm=() => {
    let name = nameInput.value.trim();
    if(!name || name===""){
        errorName.textContent= "Tên ko được để trống!";
    }

    let email=emailInput.value.trim();
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateForm();
})
render();