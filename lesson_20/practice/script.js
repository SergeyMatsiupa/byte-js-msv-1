function Input(options) {
    const {
      name,
      placeholder,
      type = "text",
      onInput = () => {},
      onChange = () => {},
    } = options;
  
    this.element = document.createElement("input");
    this.name = name;
    this.value = this.element.value;
    this.element.name = name;
    this.element.type = type;
    this.element.placeholder = placeholder;
  
    function addListeners() {
      this.element.addEventListener("change", (event) => {
        onChange(event);
      });
      this.element.addEventListener("input", (event) => {
        this.value = event.target.value;
        onInput(event);
      });
    }
  
    addListeners.call(this);
  }
  
  Input.prototype.render = function (container) {
    container.append(this.element);
  };
  
  function Form(options) {
    const { inputs, onSubmit, submitBtnText } = options;
  
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.innerText = submitBtnText;
  
    this.inputs = inputs;
    this.form = document.createElement("form");
  
    function getFormValues(inputs) {
      return inputs.reduce((values, input) => {
        values[input.name] = input.value;
  
        return values;
      }, {});
    }
  
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formValues = getFormValues(this.inputs);
      onSubmit(formValues, event);
    });
  
    this.inputs.forEach((input) => {
      input.render(this.form);
    });
  
    this.form.append(submitBtn);
  }
  
  Form.prototype.render = function (container) {
    container.append(this.form);
  };
  
  const loginInput = new Input({
    name: "login",
    placeholder: "Login",
  });
  
  const passwordInput = new Input({
    name: "password",
    placeholder: "password",
    type: "password",
  });
  
  const form = new Form({
    inputs: [loginInput, passwordInput],
    onSubmit: (values) => console.log(`values`, values),
    submitBtnText: "Войти",
  });
  
  form.render(document.body);
  