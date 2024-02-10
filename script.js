const wrapper = document.querySelector('.wrapper');
const backBtn = document.querySelector('.back-btn');
const menuBtn = document.querySelector('.menu-btn');

const toggleScreen = () => {
    wrapper.classList.toggle('show-category');
};

menuBtn.addEventListener('click', toggleScreen);
backBtn.addEventListener('click', toggleScreen);

const addTaskBtn = document.querySelector('.add-task-btn');
const addTaskForm = document.querySelector('.add-task');
const blackBackdrop = document.querySelector('.black-backdrop');

const toggleAddTaskForm = () => {
    addTaskForm.classList.toggle('active');
    blackBackdrop.classList.toggle('active');
    addTaskBtn.classList.toggle('active');
};

addTaskBtn.addEventListener('click', toggleAddTaskForm);
blackBackdrop.addEventListener('click', toggleAddTaskForm);

let categories = [
    {
        title: 'Personal',
        img: 'boss.png',
    },
    {
        title: 'Work',
        img: 'suitcase.png',
    },
    {
        title: 'Shopping',
        img: 'shopping-cart.png',
    },
    {
        title: 'Coding',
        img: 'programming.png',
    },
    {
        title: 'Health',
        img: 'better-health.png',
    },
    {
        title: 'Fitness',
        img: 'weightlifting.png',
    },
    {
        title: 'Education',
        img: 'reading.png',
    },
    {
        title: 'Finance',
        img: 'salary.png',
    },
];

let tasks = [
    {
        id: 1,
        task: 'Schedule a dentist appointment for next Monday',
        category: 'Personal',
        completed: false,
    },
    {
        id: 2,
        task: 'Buy groceries for the week including fresh vegetables',
        category: 'Personal',
        completed: false,
    },
    {
        id: 3,
        task: 'Pay the electricity bill online before Friday',
        category: 'Personal',
        completed: false,
    },
    {
        id: 4,
        task: 'Read two chapters of the new novel tonight',
        category: 'Personal',
        completed: false,
    },
];

let selectedCategory = categories[0];

const categoriesContainer = document.querySelector('.categories');
const categoryTitle = document.querySelector('.category-title');
const totalCategoryTasks = document.querySelector('.category-tasks');
const categoryImg = document.querySelector('#category-img');
const totaltasks = document.querySelector('.totalTasks');

const calculateTotal = () => {
    const categoryTasks = tasks.filter((task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase());
    totalCategoryTasks.innerHTML = `${categoryTasks.length} Tasks`;
    totaltasks.innerHTML = tasks.length;
};

const renderCategories = () => {
    categoriesContainer.innerHTML = '';
    categories.forEach((category) => {
        const categoryTasks = tasks.filter((task) => task.category.toLowerCase() === category.title.toLowerCase());
        const div = document.createElement('div');
        div.classList.add('category');
        div.addEventListener('click', () => {
            wrapper.classList.add('show-category');
            selectedCategory = category;
            categoryTitle.innerHTML = category.title;
            categoryImg.src = `img/${category.img}`;
            calculateTotal();
            renderTasks();
        });
        div.innerHTML = `
        <div class="left">
        <img src="img/${category.img}" alt="${category.title}">
        <div class="content">
            <h1>${category.title}</h1>
            <p>${categoryTasks.length} Tasks</p>
        </div>
    </div>
    <div class="options">
        <div class="toggle-btn">
            <i class="bx bx-dots-vertical-rounded"></i>
        </div>
    </div>
        `;

        categoriesContainer.appendChild(div);
    });
};

const tasksContainer = document.querySelector('.tasks');

const renderTasks = () => {
    tasksContainer.innerHTML = '';
    const categoryTasks = tasks.filter((task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase());
    if (categoryTasks.length === 0) {
        tasksContainer.innerHTML = `
        <p class="no-task">No tasks for this category</p> 
        `;
    } else {
        categoryTasks.forEach((task) => {
            const div = document.createElement('div');
            div.classList.add('task-wrapper');
            const label = document.createElement('label');
            label.classList.add('task');
            label.setAttribute('for', task.id);
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = task.id;
            checkbox.checked = task.completed;

            checkbox.addEventListener('change', () => {
                const index = tasks.findIndex((t) => t.id === task.id);
                tasks[index].completed = !tasks[index].completed;
                saveLocal();
            });

            div.innerHTML = `
            <div class="delete">
            <i class="bx bxs-trash"></i>
            </div>
            `;

            label.innerHTML = `
            <span class="checkmark">
            <i class="bx bx-check"></i>
            </span>
            <p>${task.task}</p>
            `;
            label.prepend(checkbox);
            div.prepend(label);
            tasksContainer.appendChild(div);

            const deleteBtn = div.querySelector('.delete');
            deleteBtn.addEventListener('click', () => {
                const index = tasks.findIndex((t) => t.id === task.id);
                tasks.splice(index, 1);
                saveLocal();
                renderTasks();
            });
        });

        renderCategories();
        calculateTotal();
    }
};

// save-get from local storage
const saveLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const getLocal = () => {
    const localTasks = JSON.parse(localStorage.getItem('tasks'));

    if (localTasks) {
        tasks = localTasks;
    }
};
const categorySelect = document.querySelector('#category-select');
categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    categorySelect.appendChild(option);
});

getLocal();
calculateTotal();
renderCategories();
renderTasks();
