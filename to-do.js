window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list1 = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const task1 = document.createElement('div');
        task1.classList.add('task');

        const task_content = document.createElement('div');
        task_content.classList.add('content');

        task1.appendChild(task_content);

        const task_input = document.createElement('input');
        task_input.classList.add('text');
        task_input.type = 'text';
        task_input.value = task;
        task_input.setAttribute('readonly', 'readonly');

        task_content.appendChild(task_input);

        const task_work = document.createElement('div');
        task_work.classList.add('actions');

        const task_edit = document.createElement('button');
        task_edit.classList.add('edit');
        task_edit.innerText = 'Edit';

        const task_del = document.createElement('button');
        task_del.classList.add('delete');
        task_del.innerText = 'Delete';

        task_work.appendChild(task_edit);
        task_work.appendChild(task_del);

        task1.appendChild(task_work);

        list1.appendChild(task1);

        input.value = '';

        task_edit.addEventListener('click', (e) => {
            if (task_edit.innerText.toLowerCase() == "edit") {
                task_edit.innerText = "Save";
                task_input.removeAttribute("readonly");
                task_input.focus();
            } else {
                task_edit.innerText = "Edit";
                task_input.setAttribute("readonly", "readonly");
            }
        });

        task_del.addEventListener('click', (e) => {
            list1.removeChild(task1);
        });
    });
});