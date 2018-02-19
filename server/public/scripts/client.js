// jQuery Shorthand is my jam
$(toDoApp);

// I am going to try and be better about console logs or so help me I'm giving
// the One Ring to Sauron!

// Get the One Ring to Rivendale!
function toDoApp() {
    console.log('jq and client.js running. Also inside toDoApp.');    

    // Run these along the way to Rivendale.
    getTasks();
    getCategories();

    // Listen carefully for Nazgul.
    $('#addTaskButton').on('click', addTask);
    $('#taskList').on('click', '.completeButton', completeTask);
    $('#taskList, #completeTasks').on('click', '.deleteButton', deleteTask);

    // Can't continue without Frodo.
    $('#submitTaskForm').submit(function(e){
        e.preventDefault();
    });
} // rip toDoApp

// PLAYER AJAX JOINS THE GAME
// AJAX GETS /TASKS!
// AJAX DISPLAYSALLTASKS!
// AJAX COUNTTASKS!
function getTasks() {
    console.log('Inside getTasks');
    $.ajax({
        method: 'GET',
        url: '/tasks',
        success: function(response){
            displayAllTasks(response);
        }
    });
} // rip getTasks

// AJAX GETCATEGORIES
// AJAX SAVE IN DISPLAYCATEGORIES FOR DISPLAYCATGORIES()
function getCategories() {
    console.log('Inside getCategories');
    $.ajax({
        method: 'GET',
        url: '/tasks/categories',
        success: displayCategories
    });
} // rip getCategories

// Loops, empties, DOMS, oh my!
function displayCategories(categories) {
    console.log('Inside displayCategories');
    // CLEAR! **ZAP**
    $('#categorySelect').empty();
    // Loopin to the DOM, Loopin for days
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        $('#categorySelect').append(`<option value="${category.id}">${category.description}</option>`);
    }
} // rip getCategories

// Put on the One Ring and see everything!
function displayAllTasks(tasks) {
    console.log('Inside displayAllTasks');
    $('#taskList').empty();
    $('#completedTasks').empty();
    // Loopin' through to get the values for the category
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        let categoryText = '';
        if(task.category_id === 1) {
            categoryText = 'Low Priority';
        } else if (task.category_id === 2) {
            categoryText = 'Medium Priority';
        } else {
            categoryText = 'High Priority';
        }
    // Now we prepend! Why do we prepend? Because we put it at the beginning 
    // of the index, not the end like append!
        if(task.complete != true) {
            $('#taskList').prepend(`<li class="todo-list" data-id="${task.id}">
            <i class="fa fa-calendar"></i><span class="task-description">${task.description}</span>
            <i class="fa fa-clock"></i><span class="due-date">${task.due_date}</span>
            <div class="tools"><span id="edit"><i class="fa fa-edit"></i></span>
            <span id="complete"><i class="fa fa-check"></i></span>
            <span id="delete"><i class="fa fa-trash-alt"></i></span></div>
            <div class="category-text">${categoryText}</div></li>`); 
        } else {
            $('#completedTasks').prepend(`<li class="complete-list" data-id="${task.id}"><i class="fa fa-calendar-check"></i><span class="task-description">${tasks.description}</span><div class="tools"><span id="delete"><i class="fa fa-trash-alt"></i></span></li>`);
        }
    }
} // end displayAllTasks

// Frodo adds Gollum to what's left of the fellowship.
function addTask() {
    let taskToSend = {
        description: $('#taskDescription').val(),
        due_date: $('#dueDate').val(),
        categoryId: $('#categorySelect').val()
    };

    if(taskToSend.description != '' && taskToSend.dueDate !='') {
        $.ajax({
            method: 'POST',
            url: '/tasks',
            data: taskToSend,
            success: function (response) {
                console.log('response', response);
                getTasks();
                // Clear the inputs!
                $('#taskDescription').val('');
                $('#dueDate').val('');
            }
        });
    } else {
        alert('Please enter a task description and due date.');
    }
} // end addTask

// The One Ring is destroyed!
function completeTask() {
    console.log('Inside completeTask');
    let currentTaskId = $(this).parents('.task-item').data('id');
    $.ajax({
        method: 'PUT',
        url: '/tasks/complete/' + currentTaskId,
        success: function(response) {
            getTasks();            
        }
    });
} // end completeTask

// THE PRECIOUS IS LOST!
function deleteTask() {
    console.log('Inside deleteTask');
    let currentTaskId = $(this).parents('.task-item').data('id');
    $.ajax({
        method: 'DELETE',
        url: '/tasks/' + currentTaskId,
        success: function(response) {
            getTasks();
        }
    });
} // rip deleteTask