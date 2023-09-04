// Load the current theme mode from local storage or use light mode as the default
const themeToggle = document.getElementById("themeToggle");
const savedThemeMode = localStorage.getItem("themeMode");
if (savedThemeMode) {
    document.body.className = savedThemeMode;
    themeToggle.checked = savedThemeMode === "dark-mode";
}

// Toggle between dark mode and light mode
themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        document.body.className = "dark-mode";
        localStorage.setItem("themeMode", "dark-mode");
    } else {
        document.body.className = "light-mode";
        localStorage.setItem("themeMode", "light-mode");
    }
});

// Load tasks from local storage when the page loads
window.addEventListener("load", () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");

    tasks.forEach(task => {
        const listItem = createTaskElement(task);
        taskList.appendChild(listItem);
    });
});

function addTask() {
    const taskInput = document.getElementById("task");
    const dueDateInput = document.getElementById("dueDate");
    const dueTimeInput = document.getElementById("dueTime"); // Added time input
    const prioritySelect = document.getElementById("priority");
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const dueTime = dueTimeInput.value; // Get time value
    const priority = prioritySelect.value;

    if (taskText === "") {
        return;
    }

    const task = { text: taskText, dueDate, dueTime, priority }; // Include time in task object
    const taskList = document.getElementById("taskList");
    const listItem = createTaskElement(task);
    taskList.appendChild(listItem);

    // Save the updated task list to local storage
    saveTasksToLocalStorage();

    taskInput.value = "";
    dueDateInput.value = "";
    dueTimeInput.value = ""; // Clear time input after adding a task
}

function createTaskElement(task) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${task.text}</span>
        <span>Date: ${task.dueDate}</span>
        <span>Time: ${task.dueTime}</span>
        <span>Priority: ${task.priority}</span>
        <button class="delete" onclick="removeTask(this)">Delete</button>
    `;

    return listItem;
}

function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();

    // Update local storage after task removal
    saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
    const taskList = document.getElementById("taskList");
    const tasks = [];
    for (const listItem of taskList.children) {
        const taskText = listItem.querySelector("span").textContent;
        const dueDate = listItem.querySelector("span:nth-child(2)").textContent.split(": ")[1];
        const dueTime = listItem.querySelector("span:nth-child(3)").textContent.split(": ")[1];
        const priority = listItem.querySelector("span:nth-child(4)").textContent.split(": ")[1];

        tasks.push({ text: taskText, dueDate, dueTime, priority });
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
