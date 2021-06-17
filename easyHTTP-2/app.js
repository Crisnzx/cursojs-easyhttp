
document.querySelector('#submit').addEventListener('click', runApp);

const select = document.querySelector('#method');
const idInput = document.querySelector('#id');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const http = new EasyHTTP();

function runApp(e) {

   const method = select.value;
   const id = idInput.value;
   const name = nameInput.value;
   const email = emailInput.value;
   const password = passwordInput.value;

   if(method === 'get') {
      
      http.get('https://ccm-backend.herokuapp.com/usuario')
         .then(users => {
            console.log(users);
         })
         .catch(error => console.log(error));

   }
   if(method === 'post') {
      
      const user = {nome: name, email: email, senha: password}

      http.post('https://ccm-backend.herokuapp.com/usuario', user)
         .then(user => console.log(user))
         .catch(error => console.log(error));
   }

   if(method === 'put') {
      const user = {id: id, nome: name, email: email, senha: password}

      http.put('https://ccm-backend.herokuapp.com/usuario', user)
      .then(user => console.log(user))
      .catch(error => console.log(error));
   }

   if(method === 'delete') {
      http.delete(`https://ccm-backend.herokuapp.com/usuario/${id}`)
      .then(text => console.log(text))
      .catch(error => console.log(error));
   }

   idInput.value = '';
   nameInput.value = '';
   emailInput.value = '';
   passwordInput.value = '';
   e.preventDefault();
}

