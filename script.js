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
];

const categoriesContainer = document.querySelector('.categories');

const renderCategories = () => {
    categoriesContainer.innerHTML = '';
    categories.forEach((category) => {
        const categoryTask = task.filter((task) => task.category.toLowerCase() === category.title.toLowerCase());
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
    });
};

renderCategories();
