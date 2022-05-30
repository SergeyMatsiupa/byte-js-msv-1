// import {a} from './test.js';
import './styles/style.css';
import { loginConfig } from './components/formConfigs.js';
import { Input } from './components/Input.js';
import { api } from './components/API.js';
import { TaskBoard } from './components/TaskBoard';
import { Auth } from './components/Auth';
import { Form } from '../../_work/links/final-project/src/components/Form';

// const input = new Input(loginConfig[0]);
// input.render(document.body);

const appContainer = document.getElementById('app');

const onLoginSucces = async () => {
    console.log(`Hello!`);
    appContainer.innerHTML = "";
    const user = await api.getSelf();
    renderAppLayout(user);
  };

const auth = new Auth({
    appContainer,
    onLoginSucces
});

export const taskBoard = new TaskBoard({
  appContainer
})

const renderAppLayout = async (user) => {
    auth.user = user;
    auth.renderHeaderControls();
    taskBoard.renderLayout();
    const taskList = await api.getAllTasks();
    taskList.forEach((task) => taskBoard.addTask(task))
}

// auth.renderAuthForm();



const init = async () => {
    const isLoggedIn = api.isLoggedIn();
    if (isLoggedIn) {
      const user = await api.autoLogin();
      renderAppLayout(user);
    } else {
      auth.renderAuthForm();
    }
  };
  

init();
  

// const testFormContainer = document.createElement('div');
// testFormContainer.classList.add('auth-form');

// appContainer.append(testFormContainer);

// const loginForm = new Form({
//     inputs: loginConfig.map((config) => new Input(config)),
//     onSubmit: (values) => console.log('values', values),
//     submitBtnText: 'Enter',
//     title: 'Login'
// });

// loginForm.render(testFormContainer);

// api.login({email: "sergiy.matsiupa@gmail.com",
//     password: "sergiy.matsiupa"}).then((res) => {
//     // console.log('res', res);
//     api.getSelf();
// }).catch((err) => {
//   console.log('err', err);
// });

// const res = 
// // api.register({
// //     email: 'test1111111111111@test.com', 
// //     password: '1q2w3e',
// //     name: 'testmail',
// // }).then(() => {
//     api.login({
//         email: 'test1111111111111@test.com', 
//         password: '1q2w3e',
//     }).then(() => {
//         // console.log('res', res);
//         api.getSelf();
//     }).catch((err) => {
//         console.log('err', err);
//     });
// // });

// console.log('res', res);

// const isAuthorized = api.isLoggedIn();
// if(isAuthorized) {
//     api.autoLogin();
// } else {
//     // ...render auth form
//     console.log('LOGIN');
// }


// console.log("first !");
// console.log('a', a);