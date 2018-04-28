## What Are We Building It With?
```                          
,________,         .-------,  _Request_    .---------,         .----------.
|________|       ,'_____ ,'|   -> | ->   ,'________,'|        ( ~--------~ )
| HTML 5 |      | JS     | |      |      | _______ | |        | ~--------~ |
| CSS    |      | jQuery | |      |      | Node.js | |        | PostgreSQL |
| Boot   | <--  |        | |      |      | Express | |        | Postico    |        
|  strap |      |        | ;   <- | <-   | _______ | ;        | ~--------~ |
|________|      |________|'  _Response_  |_________|'         `.__________.'
  Client        Client Logic                Server               Database
        *Front End*                                  *Back End*              
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
  - :ballot_box_with_check: Table `categories` created
    ```
    | id            | category_id   |
    | (primary key) | (low med hi)  |
    |:-------------:|:-------------:|
    |      1        |  high         |
    |      2        |  low          |
    ```
  - :ballot_box_with_check: Both tables work together as needed

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
  - :ballot_box_with_check: Clicking Complete Button will also move the completed task to the completed task list & hide the complete button on that task
- :ballot_box_with_check: AJAX DELETE deletes the task in the database
  - :ballot_box_with_check: Clicking Delete Button will remove the task from the database
  - :ballot_box_with_check: BUT will warn you, asking if you are sure you want to delete this task
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

- :ballot_box_with_check: Publish this app to Heroku
- :ballot_box_with_check: Adjust logic so completed tasks are at bottom of the page, incomplete tasks near the top of the page
- :ballot_box_with_check: Sort tasks by priority
- :ballot_box_with_check: Completed list section to serve as an indicator when tasks are complete
