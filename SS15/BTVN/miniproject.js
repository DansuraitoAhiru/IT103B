let tasks = [];
let nextId = 1;

const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');
const completedCount = document.querySelector('#completedCount');
const totalCount = document.querySelector('#totalCount');
const completionStatus = document.querySelector('#completionStatus');


const renderTasks=() => {
    taskList.innerHTML = "";
    if(tasks.length === 0){
        taskList.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">📋</div>
            <div class="empty-state-text">
                Chưa có công việc nào. Hãy thêm công việc mới!
            </div>
        </div>
        `;
        return;
    }

    tasks.forEach(task => {
        const taskItem = createTask(task);
        taskList.appendChild(taskItem);
    });
};
renderTasks();

const addTask=() => {
    const taskText = taskInput.value.trim();
    if(taskText === ""){
        alert("Vui lòng nhập tên công việc!");
        taskInput.focus();
        return;
    }

    const newTask = {
        id: nextId++,
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = "";
    taskInput.focus();
    renderTasks();
    updateFooter();
};

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (event) {
    if(event.key === "Enter"){
        addTask();
    }
});

const createTask=(task) => {
    const taskItem = document.createElement("div");
    taskItem.className = `task-item ${task.completed ? "completed" : ""}`;
    taskItem.dataset.id = task.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function(){
        toggleTask(task.id);
    });

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = task.text;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "btn-edit";
    editBtn.textContent = "✏️ Sửa";
    editBtn.addEventListener("click", function(){
        editTask(task.id);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete";
    deleteBtn.textContent = "🗑️ Xóa";
    deleteBtn.addEventListener("click", function(){
        deleteTask(task.id);
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(actions);

    return taskItem;

}

const toggleTask=(taskId) => {
    const task = tasks.find(t => t.id === taskId);
    if(task){
        task.completed = !task.completed; // phủ định giá trị, biến true thành false và ngược lại
    }

    renderTasks();
    updateFooter();
};


const editTask=(taskId) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    
    const taskItem = document.querySelector(`[data-id="${taskId}"]`);
    const taskTextElement = taskItem.querySelector('.task-text');
    const actions = taskItem.querySelector('.task-actions');
    
    taskItem.classList.add('editing'); // Thêm class editing
    
    const editInput = document.createElement('input'); // Tạo input để sửa
    editInput.type = 'text';
    editInput.className = 'task-edit-input';
    editInput.value = task.text;
    
    // Tạo nút Lưu
    const saveBtn = document.createElement('button');
    saveBtn.className = 'btn-save';
    saveBtn.textContent = '💾 Lưu';
    saveBtn.addEventListener('click', () => saveTask(taskId, editInput.value));
    
    // Tạo nút Hủy
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'btn-cancel';
    cancelBtn.textContent = '❌ Hủy';
    cancelBtn.addEventListener('click', () => renderTasks());
    
    // Xóa actions cũ và thêm input + buttons mới
    actions.innerHTML = '';
    actions.appendChild(saveBtn);
    actions.appendChild(cancelBtn);
    
    // Thêm input vào task item
    taskItem.insertBefore(editInput, actions);
    editInput.focus();
    editInput.select();
    
    // Cho phép nhấn Enter để lưu
    editInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveTask(taskId, editInput.value);
        } else if (e.key === 'Escape') {
            renderTasks();
        }
    });
};


// Lưu công việc sau khi sửa
const saveTask=(taskId, newText) => {
    const trimText = newText.trim();
    
    if (trimText === '') {
        alert('Tên công việc không được để trống!');
        return;
    }
    
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.text = trimText;
        renderTasks();
        updateFooter();
    }
}

const deleteTask=(taskId) => {
    const task = tasks.find(t => t.id === taskId);
    if(!task) return;
    
    if(confirm(`Bạn có chắc chắn muốn xóa công việc "${task.text}"?`)) {
        tasks = tasks.filter(t => t.id !== taskId);
        renderTasks();
        updateFooter();
    }
};

const updateFooter=() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;

    // cập nhật số liệu
    totalCount.textContent = total;
    completedCount.textContent = completed;

    // hiện ra hoàn thành tất cả
    if (total > 0 && completed === total) {
        completionStatus.innerHTML = `
            <div class="completion-badge">
                <span class="check-icon">✓</span>
                Hoàn thành tất cả!
            </div>
        `;
    } else {
        completionStatus.innerHTML = "";
    }
};
updateFooter();