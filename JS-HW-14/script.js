const formConfig = [
    {
      element: "text",
      name: "login",
      label: "Логин",
    },
    {
      element: "text",
      name: "age",
      label: "Возраст",
    },
    {
      element: "select",
      name: "language",
      label: "Выберите язык программирования",
      options: [
        {
          text: "JavaScript",
          value: "js",
        },
        {
          text: "Java",
          value: "java",
        },
        {
          text: "Python",
          value: "python",
        },
      ],
    },
  ];

  const rezFrmObj = {};

  const renderForm = () => {
    const frmObj = document.createElement('form');
        for (let elem of formConfig) {
            const divElem = document.createElement('div');
            const lblElem = document.createElement('label');
            lblElem.innerText = elem.label;
            lblElem.setAttribute("for", elem.name);
            divElem.appendChild(lblElem);
            let inpElem = (elem.element == "text") ? document.createElement('input') : document.createElement('select');
            inpElem.name = elem.name;
            inpElem.id = elem.name;
            if (elem.element == "text") {
                inpElem.type = 'text';
            } else {
                for (let option of elem.options) {
                    const optElem = document.createElement('option');
                    optElem.value = option.value;
                    optElem.innerText = option.text;
                    inpElem.appendChild(optElem);
                }
            };
            divElem.appendChild(inpElem);
            frmObj.appendChild(divElem);
        }
        const submElem = document.createElement('button');
        submElem.type = 'submit';
        submElem.innerText = "Submit";
        frmObj.appendChild(submElem);
        document.body.append(frmObj);
        frmObj.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            for (let pair of formData.entries()) {
                rezFrmObj[pair[0]] = pair[1];
              }
              console.log(`rezFrmObj`, rezFrmObj);
        });
    };

  document.getElementById('render-form-butt-id').addEventListener('click', renderForm);

