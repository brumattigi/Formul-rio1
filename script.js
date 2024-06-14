const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const complement = document.getElementById("complement");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");
const age = document.getElementById("age");
const maritalStatus = document.getElementById("marital-status");
const observation = document.getElementById("observation");
const cep= document.getElementById("cep");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

// Adicionando eventos de blur para todos os campos
username.addEventListener("blur", () => {
  checkInput(username, "Username é obrigatório!");
})

email.addEventListener("blur", () => {
  checkInput(email, "Email é obrigatório.");
})

password.addEventListener("blur", () => {
  checkInput(password, "Senha é obrigatório.");
})

passwordConfirmation.addEventListener("blur", () => {
  checkInput(passwordConfirmation, "Confirmação de senha é obrigatório.");
})

address.addEventListener("blur", () => {
  checkInput(address, "Rua é obrigatório.");
})

city.addEventListener("blur", () => {
  checkInput(city, "Bairro é obrigatório.");
})

state.addEventListener("blur", () => {
  checkInput(state, "Estado é obrigatório.");
})

complement.addEventListener("blur", () => {
    checkInput(complement, "Complemento é obrigatório.");
  })

phone.addEventListener("blur", () => {
  checkInput(phone, "Telefone é obrigatório.");
})

gender.addEventListener("blur", () => {
  checkInput(gender, "Gênero é obrigatório.");
})

age.addEventListener("blur", () => {
  checkInput(age, "Idade é obrigatório.");
})

maritalStatus.addEventListener("blur", () => {
  checkInput(maritalStatus, "Estado civil é obrigatório.");
})

observation.addEventListener("blur", () => {
  checkInput(observation, "Observação é obrigatório.");
})

cep.addEventListener("blur", () => {
  checkInput(cep, "Cep é obrigatório.");
})

function checkInput(input, message){
  const inputValue = input.value;

  if(inputValue === ""){
    errorInput(input, message)
  }else{
    const formItem = input.parentElement;
    formItem.className = "form-content"
  }
}

function checkForm(){
  // Verificando todos os campos
  checkInput(username, "Username é obrigatório!");
  checkInput(email, "Email é obrigatório.");
  checkInput(password, "Senha é obrigatório.");
  checkInput(passwordConfirmation, "Confirmação de senha é obrigatório.");
  checkInput(address, "Rua é obrigatório.");
  checkInput(city, "Bairro é obrigatório.");
  checkInput(state, "Estado é obrigatório.");
  checkInput(complement, "Complemento é obrigatório.");
  checkInput(phone, "Telefone é obrigatório.");
  checkInput(gender, "Gênero é obrigatório.");
  checkInput(age, "Idade é obrigatório.");
  checkInput(maritalStatus, "Estado civil é obrigatório.");
  checkInput(observation, "Observação é obrigatório.");
  checkInput(cep,"Cep é obrigatório");

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("CADASTRADO COM SUCESSO!")
  }
}

function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"
}

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Aqui vai o seu código para processar o formulário
  
    // Limpa os campos do formulário
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirmation').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('complement').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('age').value = '';
    document.getElementById('marital-status').value = '';
    document.getElementById('observation').value = '';
    document.getElementById('cep').value ='';
});

document.getElementById('cep').addEventListener('blur', function() {
  var cep = this.value.replace(/\D/g, '');

  if (cep != "") {
    var validacep = /^[0-9]{8}$/;

    if(validacep.test(cep)) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!("erro" in data)) {
            document.getElementById('address').value = data.logradouro;
            document.getElementById('city').value = data.bairro;
            document.getElementById('state').value = data.uf;
          } else {
            alert("CEP não encontrado.");
          }
        })
        .catch(() => alert("Erro ao buscar o CEP."));
    } else {
      alert("Formato de CEP inválido.");
    }
  }
});