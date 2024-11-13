function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // Validate task text
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create new task item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task_item');

    // Task text
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.onclick = () => toggleTaskCompleted(taskItem);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => taskItem.remove();

    // Append elements to task item
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);

    // Add task item to task list
    document.getElementById('taskList').appendChild(taskItem);

    // Clear input field
    taskInput.value = '';
}

function toggleTaskCompleted(taskItem) {
    taskItem.classList.toggle('completed');
}
