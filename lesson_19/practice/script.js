// Реализовать мини-приложение, в котором будет доступен
// функциаонал регистрации и авторизации.

// 1. При входе на сайт показывать пользователю
//    форму логина
// 2. После успешного входа отрисовать
//    на странице список пользователей.
// 3. Если пользователь был ранее авторизован, то вместо
//    показа формы сразу показывать список пользователей.
// 4. Список пользователей должен быть пагинирован, пользователи
//    должны отображаться по 4 на странице.

const BASE_URL = "https://reqres.in/api";
const PER_PAGE = 4;
const TOKEN_KEY = "token";
const headers = { "Content-Type": "application/json" };

const usersContainer = document.getElementById("users-list");
const paginationContainer = document.getElementById("pagination");
const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const isAuthorized = localStorage.getItem(TOKEN_KEY)

// avatar: "https://reqres.in/img/faces/1-image.jpg"
// email: "george.bluth@reqres.in"
// first_name: "George"
// id: 1
// last_name: "Bluth"

const handleRequestErrors = async (response) => {
  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error);
  }

  return response;
};

// Обрабока запроса логина
const login = async (data) => {
  try {
    const response = await handleRequestErrors(
      await fetch(`${BASE_URL}/login`, {
        body: JSON.stringify(data),
        method: "POST",
        headers,
      })
    );

    const { token } = await response.json();
    localStorage.setItem(TOKEN_KEY, token);
    loginForm.style.display = "none";
  } catch (error) {
    alert(error.message);
  }
};

// Обработка запроса на получение пользователей
const fetchUsers = async (page) => {
  try {
    const response = await handleRequestErrors(
      await fetch(`${BASE_URL}/users?page=${page}&per_page=${PER_PAGE}`, {
        method: "GET",
        headers,
      })
    );

    const { data: users, total_pages } = await response.json();

    return {
      users,
      total_pages,
    };
  } catch (error) {
    alert(error.message);

    return {
      users: [],
      total_pages: 0,
    };
  }
};
fetchUsers(1);

// Получение html-карточки пользователя
const getUserCardHtml = (user) => {
  const { avatar, first_name, last_name } = user;

  const html = `
    <div>
      <img alt="avatar" src="${avatar}"/>
      <p>${first_name} ${last_name}</p>
    </div>
  `;

  return html;
};

// Рендер всего списка пользователей на страницу
const renderUsers = (usersList) => {
  const html = usersList.map(getUserCardHtml).join("");
  usersContainer.innerHTML = html;
};

// Смена страницы
const handleChangePage = ({ target: currentBtn }) => {
  const newPage = currentBtn.dataset.page;

  if (currentBtn.classList.contains("button__active")) {
    return;
  }

  const prevButton = [...paginationContainer.children].find((btn) => {
    return btn.classList.contains("button__active");
  });

  prevButton.classList.remove("button__active");
  currentBtn.classList.add("button__active");
  updateUsersList(newPage);
};

// Создание кнопок пагинации на основе кол-ва страниц
const setupPagination = (totalPage) => {
  for (let i = 1; i <= totalPage; i++) {
    const paginationBtn = document.createElement("button");
    paginationBtn.classList.add("button", "button__paging");

    if (i === 1) {
      paginationBtn.classList.add("button__active");
    }
    paginationBtn.setAttribute("data-page", i);
    paginationBtn.innerText = i;
    paginationBtn.addEventListener("click", handleChangePage);

    paginationContainer.append(paginationBtn);
  }
};

// обработчик сабмита формы логина
const handleFormSumbit = async (event) => {
  event.preventDefault();
  const { value: email } = emailInput;
  const { value: password } = passwordInput;

  await login({ email, password });
  const { users, total_pages } = await fetchUsers(1);
  renderUsers(users);
  setupPagination(total_pages);
};

const init = async () => {
  if (!isAuthorized) {
    loginForm.style.display = "block";
  } else {
    const { users, total_pages } = await fetchUsers(1);
    renderUsers(users);
    setupPagination(total_pages);
  }
};

const updateUsersList = async (page) => {
  const { users } = await fetchUsers(page);
  renderUsers(users);
};

init();

loginForm.addEventListener("submit", handleFormSumbit);
// login({
//   email: "george.bluth@reqres.in",
//   password: "123123",
// });
