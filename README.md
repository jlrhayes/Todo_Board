# Todo App

## How to run the application
To run the frontend and backend:

` cd todo_backend && node server.js `

` cd todo_client && npm start `

To refresh the documentation run:

In VSCode you can download an extension called ["Live Server"](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) if you right click the file "index.html" in the "todo_client/jsdoc" folder you can open it with Live Server.

## Features of the application

### Dashboard
The dashboard contains all of the currently existing boards. It also contains a modal with a form to create a new board.

### Board
Each board contains a list of columns. It also includes a form to create a new column.

### Column
Each individual column contains a list of tasks that are assigned to that particular column. It also has a form to create a new task. A column can be deleted or edited.

### Task
Each task has a title and a description and is either assigned to a user or unassigned. The task displays the user's avatar. A task can be moved between columns. A task can be deleted or edited.

### User
Users have a name, email, password, avatar URL and an admin status. Only admins can create boards and columns. Users can be deleted and passwords are salted and hashed.

## Design decisions
We went for a beige and orange colour palette because it is high contrast and makes the content easily readable.

We gave the buttons larger text to make it more accessible.

## Team roles and responsibilities
Jack - Most of the backend endpoints, some testing, creating UML diagrams, user creation / deletion.

Josh - Frontend modal and base classes.

Katie - Most of the testing, created database models, documentation.

Christie - Forms, connecting forms to the database, edit and delete buttons, styling.


## UML Diagrams
### Use Case Diagram
<img src="To-Do App Use Case Diagram.png" alt="Use Case Diagram" width="200"/>

### Schema Diagram
<img src="To-Do App Schema Diagram.png" alt="Schema Diagram" width="200"/>

### Sequence Diagrams
<div class="display: grid; grid-template-columns: repeat(3, 1fr);">
<img src="Sequence Diagrams/To-Do App Change Password Sequence Diagram.png" alt="Sequence Diagram" width="200"/>
<img src="Sequence Diagrams/To-Do App Create Board Sequence Diagram.png" alt="Sequence Diagram" width="200"/>
<img src="Sequence Diagrams/To-Do App Create User Sequence Diagram.png" alt="Sequence Diagram" width="200"/>
<img src="Sequence Diagrams/To-Do App Delete Board Sequence Diagram.png" alt="Sequence Diagram" width="200"/>
<img src="Sequence Diagrams/To-Do App Delete Column Sequence Diagram.png" alt="Sequence Diagram" width="200"/>
<img src="Sequence Diagrams/To-Do App Delete Task Sequence Diagram.png" alt="Sequence Diagram" width="200"/>
<img src="Sequence Diagrams/To-Do App Delete User Sequence Diagram.png" alt="Sequence Diagram" width="200"/>
<img src="Sequence Diagrams/To-Do App Edit Column Sequence Diagram.png" alt="Sequence Diagram" width="200"/>
<img src="Sequence Diagrams/To-Do App Edit Task Sequence Diagram.png" alt="Sequence Diagram" width="200"/>
<img src="Sequence Diagrams/To-Do App Login Sequence Diagram.png" alt="Sequence Diagram" width="200"/>
<img src="Sequence Diagrams/To-Do App Move Task Sequence Diagram.png" alt="Sequence Diagram" width="200"/>
</div>

## Database design
We have four tables, Users, Boards, Columns, and Tasks.

Boards have a ownerId which connects to a user in the Users table. One user can have many boards, and a board belongs to a user. A board also has many columns, and a column belongs to a board.

Tasks have a userId which connects to a user in the Users table. A user can have many tasks, and a task belongs to a user.

Columns have a boardId which connects to a specific board in the Boards table. A column has many tasks, and a task belongs to a column.


## Unit test coverage report
<img width="1102" alt="test-coverage" src="https://user-images.githubusercontent.com/68942539/137484967-aa3d62b2-1262-48e5-99e1-973f093dac55.png">

