const http = new EasyHTTP();


// GET REQUESTS

/*
http.get('https://ccm-backend.herokuapp.com/usuario', function (error, users) {
   if (error) {
      console.log(error);
   } else {
      console.log(users);
   }
});   */

/*
http.get('https://ccm-backend.herokuapp.com/usuario/3', function(error, user) {
   if(!error) {
      console.log(user);

   } else {
      console.log(error);
      
   }
});   */


const user = {
   nome: 'Savio',
   email: 'savio@gmail.com',
   senha: 'flamengo123'
}

/* http.post('https://ccm-backend.herokuapp.com/usuario', user, function(error, newUser) {
   console.log(newUser);
}) */

const user2 = {
   id: 5,
   nome: 'Ximbimbeu',
   email: 'jurinel@gmail.com',
   senha: 'cachorrolindo'
}

/* http.put('https://ccm-backend.herokuapp.com/usuario', user2, function(error, updatedUser) {
   console.log(updatedUser);
}); */

/*
http.delete('https://ccm-backend.herokuapp.com/usuario/6', function(error, nothing) {
   if(!error) {
      console.log(`${nothing} User deleted`);
   } else {
      console.log(error);
   }
})

*/