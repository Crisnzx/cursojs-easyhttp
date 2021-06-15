const http = new EasyHTTP();

http.get('https://ccm-backend.herokuapp.com/usuario', function (error, posts) {
   if (error) {
      console.log(error);
   } else {
      console.log(posts);
   }
});

const user = {
   nome: 'Savio',
   email: 'savio@gmail.com',
   senha: 'flamengo123'
}

http.post('https://ccm-backend.herokuapp.com/usuario', user, function(error, response) {
   console.log(response);
})