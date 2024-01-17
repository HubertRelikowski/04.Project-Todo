{
    const tasks = [
            {
                content: "nagrać film",
                done: false,
            },

            {
                content: "zjeść pierogi",
                done: true,
            },
        ];

        const addNewTask = (newTaskContent) => {

            tasks.push({
                content: newTaskContent,
            });
    
            render();
    
        };
    
        const removeTask = (taskIndex ) => {
            tasks.splice(taskIndex, 1);
            render();
        }

        const doneTask = (index) => {
            tasks[index].done = !tasks[index].done;
            render();
        }

    
    const render = () => {
        let htmlString = "";

        for(const task of tasks) {
            htmlString += `
                <li ${task.done ? "style=\"text-decoration:line-through\"" : ""  }>

                    <button class="js-done">zrobione?</button>
                    <button class="js-remove">usuń</button>
                    ${task.content}
                </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                removeTask(index);
            });
        });


        const doneButtons = document.querySelectorAll(".js-done");

        doneButtons.forEach((doneButtons, index) => {
            doneButtons.addEventListener("click", () => {
                doneTask(index);
            });
        });
    };

    

    const onFormSubmit = (event) => {
    
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            

            if (newTaskContent === "") {
                return;
            };

            addNewTask(newTaskContent);
    }

    
    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };

    init();
}
