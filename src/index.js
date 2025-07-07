  // your code here
  const form = document.getElementById("create-task-form"); //grabs the form
  const todos = document.getElementById("tasks");
  const input = document.getElementById("new-task-description");

  //add an event listener
  form.addEventListener("submit", (event) => {
      event.preventDefault(); //will stop the page from reloading

      const li = document.createElement("li"); //creates a new list element
      li.textContent = input.value; //grabs the user input
      todos.appendChild(li); //adds it to the todo list
      
    
    }
  );


