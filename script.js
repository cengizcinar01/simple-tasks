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

const categoriesContainer = document.querySelector('.categories');

const renderCategories = () => {
    categoriesContainer.innerHTML = '';
    categories.forEach((category) => {
        const categoryTasks = tasks.filter((task) => task.category.toLowerCase() === category.title.toLowerCase());
        const div = document.createElement('div');
        div.classList.add('category');
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

renderCategories();
