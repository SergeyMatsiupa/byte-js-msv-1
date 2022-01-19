const response = {
    data: [
      {
        username: "samuel",
        is_active: true,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "john",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "peter",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
    ],
    meta: {
      paging: {
        current: 1,
        next: 2,
        prev: null,
        total: 14,
        per_page: 3,
      },
    },
  };


const task1 = () => {
  const {
    data: [
      {
        is_active: isActive
      }
    ],
    meta: {
      paging: {
        total
      }
    }
  } = response;
  console.log(`total`, total);
  console.log(`isActive`, isActive);
}

document.getElementById('btn-tsk-1').addEventListener('click', task1);




const task2 = () => {
  const user = {
    name: "gabriel",
    surname: "brown",
    age: 17,
    height: 178,
  };

  const {name, surname, ...parameters} = user;
  console.log(`name`, name);
  console.log(`surname`, surname);
  console.log(`parameters`, parameters);
}

document.getElementById('btn-tsk-2').addEventListener('click', task2);




const task3 = () => {
  const max = (...nums) => {
    let res = nums[0];
    for (let i=1; i <= nums.length; i++)
      res = nums[i] > res ? nums[i] : res;
    return res;
  };

  console.log(`parameters`, max(22, 21, 88, 99, 0));
}

document.getElementById('btn-tsk-3').addEventListener('click', task3);



const task4 = () => {
  const createMessage = ({author = 'Guest', text, reciever, time = new Date()}) => {
    return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
  };
  
  // после выполнения этого задания, функция должна коректно работать с таким аргументом
  const message = createMessage({
    reciever: "John",
    text: "Hi!",
  });
  console.log(`message`, message);
}

document.getElementById('btn-tsk-4').addEventListener('click', task4);



const task51 = () => {
  let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";
// для строки str результат должен быть следующий: 
// [ 'x1y', '722a', '333', 'a123v', 'a55555a' ]
  const regExp = /\w\d+\w/ig;
  const matches = str.match(regExp);
  console.log(`matches`, matches);
}

document.getElementById('btn-tsk-51').addEventListener('click', task51);



const task52 = () => {
  let str = prompt('Please enter the domain name');
  const regExp = /^([\w.-]+)(\.)([a-z]){2,}$/i;
  if (regExp.test(str)) {
    alert(`Domain ${str} is valid`);
  } else {
    alert(`Domain ${str} is invalid`);
  }
}

document.getElementById('btn-tsk-52').addEventListener('click', task52);




const task53 = () => {
  let str = prompt('Please enter the string');
  const regExp = /^(\d){12,}$/;
  if (regExp.test(str)) {
    alert(`String ${str} is valid`);
  } else {
    alert(`String ${str} is invalid`);
  }
}

document.getElementById('btn-tsk-53').addEventListener('click', task53);

