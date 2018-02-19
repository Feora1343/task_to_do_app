# Project Planning and Management
Breaking everything down into "less is more".

## What Are We Building It With?
```
                             
,________,         .-------,  _Request_    .---------,         .----------.
|________|       ,'_____ ,'|   -> | ->   ,'________,'|        ( ~--------~ )
| HTML 5 |      | JS     | |      |      | _______ | |        | ~--------~ |
| CSS    |      | jQuery | |      |      | Node.js | |        | PostgreSQL |
| Boot   | <--  | npm    | |      |      | Express | |        | Postico    |        
|  strap |      | AJAX   | ;   <- | <-   | _______ | ;        | ~--------~ |
|________|      |________|'  _Response_  |_________|'         `.__________.'
  Client       DOM Manipulator        Server & Framework          Database
           *Front End*                       *Back End*              
```

## Building Repo Tasks
- :ballot_box_with_check: Git Repo Created
- :ballot_box_with_check: Folder Structure Created
- :ballot_box_with_check: npm init -y
- :ballot_box_with_check: Database `todo_app` created
  - :ballot_box_with_check: Table `tasks` created
    ```
    | id            | description   | completed | date due          | category_id       |
    | (primary key) |               | (def. no) | (date when due)   | (ref. cat. table) |
    |:-------------:|:-------------:|:---------:|:-----------------:|:-----------------:|
    |       1       |  Prime Class  |  Yes      |  02/15/18         | INSERT INTO cat   |
    |       2       |  Eat Dinner   |  No       |  02/15/18         | (pri) VALUES ('') |
    ```
  - :ballot_box_with_check: Table `categories` created :heavy_exclamation_mark:**HARD**:heavy_exclamation_mark:
    ```
    | id            | category_id   |
    | (primary key) | (low med hi)  |
    |:-------------:|:-------------:|
    |      1        |  high         |
    |      2        |  low          |
    ```
  - :ballot_box_with_check: Both tables work together as needed :heavy_exclamation_mark:**HARD**:heavy_exclamation_mark:

## Tasks
- :ballot_box_with_check: Create overall organization of DOM
  - :ballot_box_with_check: There will need to be input fields for adding tasks
  - :ballot_box_with_check: There will need to be a container to hold tasks
  - :ballot_box_with_check: There will need to be another container to hold tasks that are complete
  - :ballot_box_with_check: There will need to be a delete button
    - :ballot_box_with_check: Delete button removes task from the DOM and the database
  - :ballot_box_with_check: There will need to be a complete button 
    - :ballot_box_with_check: There will also need to be a remove completed tasks button

- :ballot_box_with_check: AJAX POST sends new task to database
  - :ballot_box_with_check: Clicking Add Task button sends value of input to database
  - :ballot_box_with_check: Clicking Add Task also runs function to refresh list/update
- :ballot_box_with_check: AJAX GET requests tasks from the database
  - :ballot_box_with_check: When page loads, it should always get tasks from database
  - :ballot_box_with_check: JS Loop will be needed to create the list of tasks
  - :ballot_box_with_check: Each task needs to have a complete and delete button
    - :ballot_box_with_check: Each complete and delete button needs event listener
- :ballot_box_with_check: AJAX PUT updates the tasks in the database as complete
  - :ballot_box_with_check: The element will need a `data-id`
  - :ballot_box_with_check: Clicking Complete Button will update the database
  - :ballot_box_with_check: Clicking Complete Button will also run function to refresh the tasks list
  - :black_square_button: Clicking Complete Button will also move the completed task to the completed task list & hide the complete button on that task
- :ballot_box_with_check: AJAX DELETE deletes the task in the database
  - :ballot_box_with_check: Clicking Delete Button will remove the task from the database
  - :ballot_box_with_check: BUT will warn you, asking if you are sure you want to delete this task :heavy_exclamation_mark:**HARD**:heavy_exclamation_mark:
  - :ballot_box_with_check: Clicking Delete Button will run the function to refresh the task list
- :ballot_box_with_check: AJAX PUT will update the task in the data as incomplete

- :ballot_box_with_check: Matching POST on client side with get new task
  - `INSERT INTO` database
- :ballot_box_with_check: Matching GET on client side with get all tasks
  - :ballot_box_with_check: `SELECT` from database
- :ballot_box_with_check: Matching PUT on client side which will update complete status of task
  - :ballot_box_with_check: `UPDATE` to database
- :ballot_box_with_check: Matching DELETE on client side which will delete an entire task
  - :ballot_box_with_check: `DELETE` database
- :ballot_box_with_check: Matching PUT on client side which will update task as incomplete

- :black_square_button: Publish this app to Heroku :bangbang:**PRO**:bangbang:
- :black_square_button: Adjust logic so completed tasks are at bottom of the page, incomplete tasks near the top of the page :bangbang:**PRO**:bangbang:
- :ballot_box_with_check: Add a due date to tasks and put items still incomplete near the top of the container, oldest dates first **I decided to sort by priority instead of date** :bangbang:**PRO**:bangbang:
- :black_square_button: Highlighting overdue task will highlight it in red **I decided to make this move to a completed list section to serve as an indicator** :bangbang:**PRO**:bangbang:

# To Do App
Hello Primers!

Welcome to your 3rd-weekend challenge! Full stack is pretty awesome huh? The idea that in such a short time you are now able to spin up a full application architecture is pretty incredible.

This weekend is all about showing us that you have a handle on each of the different parts of the full stack. For this weekend's challenge, you are going to create a 'TO DO' application. This is a type of application that is very common to tackle when learning a new language, which makes it extremely valuable to work through for the first time, since chances are good that at some point in your career you will tackle this type of application again only in another language.

## BASE MODE
Here are the specific components for the challenge:

Create a front end experience that allows a user to create a task.
When the task is created, it should be stored inside of a database (SQL)
Whenever a task is created the front end should refresh to show all tasks that need to be completed.
Each task should have an option to 'Complete' or 'Delete'.
When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete)
Whether or not a task is complete should also be stored in the database.
Deleting a task should remove it both from the Front End as well as the Database.
Make sure that you also show us your best styling chops. Explore icons, fonts, libraries. Really work your CSS muscles.

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

Additionally, please include some way to recreate your initial database schema. This can be a database.sql file with CREATE TABLE statements or you can create your schema automatically when your app loads.

## HARD MODE
Create a table of categories and allow Tasks to be assigned a single (1) category. This creates a one-to-many relationship (many tasks can have one category). You will need to add in joins in order to display and use this new data!
In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.

## PRO MODE
In no particular order:

Publish your app to Heroku.
Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.
Add a due date to your tasks and put the items which need to be completed next at the top of the page. Highlight overdue tasks in red.
Add any additional features that you think would be useful or interesting!