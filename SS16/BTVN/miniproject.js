let employee = [
    {
        id: 1,
        fullName: "Nguyễn Văn Cao",
        email: "caonv@gmail.com",
        dob: "06/03/2001",
        position: "Trưởng Phòng"
    }
];

let idEmployee = 1;
let isUpdate = null;

let form = document.getElementById('formEmployee');
let fullNameInput = document.getElementById('fullName');
let emailInput = document.getElementById('email');
let dobInput = document.getElementById('dateOfBirth');
let positionInput = document.getElementById('position');

let errorFullname = document.getElementById('error-fullname');
let errorEmail = document.getElementById('error-email');
let errorDob = document.getElementById('error-dob');
let errorPosition = document.getElementById('error-position');

let tbody = document.getElementById('tbody');
let title = document.querySelector('#mainTilte');




function formatDate(dateString) {
    let date = new Date(dateString);

    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear();

    return `${day}/${month}/${year}`;
}



let render = () => {

    let temp = "";

    employee.forEach(e => {

        temp += `
        <tr>
            <td>${e.id}</td>
            <td>${e.fullName}</td>
            <td>${e.email}</td>
            <td>${e.dob}</td>
            <td>${e.position}</td>
            <td class="actions">
                <button data-id="${e.id}" class="btn-edit">Sửa</button>
                <button data-id="${e.id}" class="btn-delete">Xóa</button>
            </td>
        </tr>
        `;

    });

    tbody.innerHTML = temp;
};





let validateForm = () => {
    let isValid = true;
    let fullName = fullNameInput.value.trim();
    let email = emailInput.value.trim();
    let dob = dobInput.value.trim();
    let position = positionInput.value.trim();

    errorFullname.textContent = "";
    errorEmail.textContent = "";
    errorDob.textContent = "";
    errorPosition.textContent = "";

    if (fullName === "") {
        errorFullname.textContent = "Không được để trống";
        isValid = false;
    }

    if (email === "") {
        errorEmail.textContent = "Email không được để trống";
        isValid = false;
    } else {

        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!regex.test(email)) {
            errorEmail.textContent = "Email không đúng định dạng";
            isValid = false;
        }
    }

    if (dob === "") {
        errorDob.textContent = "Ngày sinh không được để trống";
        isValid = false;
    }

    if (position === "") {
        errorPosition.textContent = "Chức vụ không được để trống";
        isValid = false;
    }

    return isValid;
};




form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (isUpdate === null) {
        let newEmployee = {
            id: ++idEmployee,
            fullName: fullNameInput.value,
            email: emailInput.value,
            dob: formatDate(dobInput.value),
            position: positionInput.value
        };

        employee.push(newEmployee);

    } else {
        employee[isUpdate].fullName = fullNameInput.value;
        employee[isUpdate].email = emailInput.value;
        employee[isUpdate].dob = formatDate(dobInput.value);
        employee[isUpdate].position = positionInput.value;

        isUpdate = null;
        title.textContent = "Thêm nhân viên";
    }

    form.reset();
    render();
});

tbody.addEventListener("click", function (e) {

    let id = Number(e.target.dataset.id);

    if (e.target.classList.contains("btn-delete")) {

        let confirmDelete = confirm("Bạn có chắc muốn xóa nhân viên này?");

        if (confirmDelete) {

            employee = employee.filter(emp => emp.id !== id);

            render();
        }
    }

    if (e.target.classList.contains("btn-edit")) {

        let index = employee.findIndex(emp => emp.id === id);

        let emp = employee[index];

        fullNameInput.value = emp.fullName;
        emailInput.value = emp.email;

        let parts = emp.dob.split("/");
        dobInput.value = `${parts[2]}-${parts[1]}-${parts[0]}`;

        positionInput.value = emp.position;

        isUpdate = index;

        title.textContent = "Cập nhật nhân viên";
    }

});

render();
