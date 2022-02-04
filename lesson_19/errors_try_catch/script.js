// Errors in js

// SyntaxError

// console.log('Я не выполнюсь')
// const x = 1.

// TypeError

// console.log("Код выполняется...");

const test = (arr) => {
    return arr.map((item) => item + 1);
  };
  
  // test()
  
  // console.log("Код дальше не выполнится");
  
  // try catch
  
  try {
    // код...
  } catch (err) {
    // обработка ошибки
  } finally {
    // код который выполниться в любом случае
  }
  
  // console.log(`username`, username)
  
try {
    console.log(`username`, username)
} catch(err) {
    console.log(`err`, err)
}
  



console.log("Code continues...");

try {
  const name = "Nikita";
  console.log(`name`, nase);
} catch (error) {
  console.log("Не выполнится, в коде нет ошибок");
} finally {
  console.log(`finally`);
}




try {
  const test2 = () => {
    return test()
  }
  test2()
} catch (error) {
  console.log(`error`, error)
}




// throw

// throw 'Error2'
// throw { a: "b" };

// throw new Error('I am error');



// try {
//   throw new Error("I am error");
// } catch (error) {
//   console.log(`error`, error.message);
// }




const formatCardNumber = (cardNumber) => {
    if (cardNumber.length !== 16) {
      throw new Error("Invalid card. Card number should include 16 symbols.");
    }
  
    return "formatted";
  };
  
// const card = formatCardNumber('41111111111111111');
// console.log(`card`, card)


const initialCard = '41111111111111111'
let formatted;
try {
  formatted = formatCardNumber(initialCard)
} catch(err) {
  formatted = initialCard
  console.error(`err`, err)
}

console.log(`formatted`, formatted)



const BASE_URL = "https://jsonplaceholder.typicode.com";

const getPost = async (id) => {
  return fetch(`${BASE_URL}/posts/${id}`);
};

getPost(1111)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then((post) => {
    console.log(`post`, post);
  })
  .catch((err) => {
    console.log(`err`, err);
  });

console.log(`aaaa`);




const handleRequestErrors = (response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
  
    return response;
  };
  
  getPost(1111)
    .then(handleRequestErrors)
    .then((response) => response.json())
    .then((post) => {
      console.log(`post`, post);
    })
    .catch((err) => {
      const status = Number(err.message);
      if (status === 404) {
        // alert("Post Not Found!");
      }
    });




const getUser = async (id) => {
    try {
        const response = handleRequestErrors(await fetch(`${BASE_URL}/users/${id}`));
        const user = await response.json();
        console.log(`user`, user);
    } catch (error) {
        const status = Number(error.message);
        if (status === 404) {
        alert("User Not Found!");
        }
    }
    };
    
      
getUser(1111);