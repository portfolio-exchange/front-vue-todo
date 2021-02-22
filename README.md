# Portfolio Stock Exchange - Vue Frontend Challenge

This is the Vue Frontend Technical challenge. This challenge consists in a simple todo list app. You will implement the solution following the 3 tasks that are defined below. We don't have any constraint in terms of design, so be free to implement the look and feel as you wish. We want to see what you are capable of!

## How to do it

For the development of the challenge, there is no backend to point to. However, we give you a small example of a fake API done with [MirageJS|https://miragejs.com/] (in fact, this comes from an example of mirage itself). You can use Mirage to mock the API calls, or you can use whatever other tool you feel comfortable with (nodejs, Python + Flask + Docker, etc). You will notice the example only contains some features, you will need to add the rest of endpoints you need to have a working solution. We don't really care about the concrete endpoints and models you define. It shouldn't take you a long time to fake the API.

Please, fork this repo into your Github account, and implement there your solution to the challenge.

## What we look for

We are not only interested on the final result, but most important, on the process you followed. So please, don't do a single commit with the whole solution. We want to see how you organize your branches and commits as much as your code.

We also value your ability to write good tests. Any piece of software can't be finished without automated tests. We leave up to you the kind of tests that should be done.

Write some docs. Use this README file to write a documentation explaining:
* Your process: how you started, how you made decissions for every task, etc. We want to know how you think.
* Your code: explain (very briefly) the different components we can find in your code, how they work and how it is organized.
* How to run your solution: explain what are the commands needed to run your solution, tests, etc.

Once you finish the challenge, send to us the link to your Github repo.

## The tasks

This is the list of tasks you have to implement. If you have any doubt, problem or you find a lack of definition, don't hesitate to contact us.

### FT-1 - Todo task list

Create a page to show the todo task list retrieved from the backend. The page will show the list of tasks with the title, and next to it:
* a checkbox indicating that the task is complete or not
* a button to delete the task

Add a button to create a new task, the page will ask for the fields of the task (title, description).

*Acceptance criteria:*
* *If a task is created, it is automatically shown in the list*
* *If a task is deleted, it is automatically removed from the list*
* *A task can be marked as complete/uncomplete using the checkbox*
* *If a task is marked as complete, it will show a strikethrough in the title (~~like this~~)*

### FT-2 - Login

Add a login page to the application. Currently the application works without login from the users. We need to add a login page as landing page so every user can login into the application.

*Acceptance criteria:*
* *Login page is the landing page*
* *If a user is not logged, he will be redirected to the login page*
* *If a user introduces incorrect credentials an error message will be shown: "Incorrect credentials"*
* *If a user introduces correct credentials, he will be redirected to the home page showing the list*

### FT-3 - Permissions

Currently every user can view the list of tasks, add new tasks, mark them as done and delete them. We want to add two levels of permissions: admin and user. A user will be able to view the list of tasks and mark them as done. An admin will be able to view the list, mark tasks as done, add new tasks and delete tasks.

*Acceptance criteria:*
* *If a user is not admin he will not see the buttons to add or delete tasks.*