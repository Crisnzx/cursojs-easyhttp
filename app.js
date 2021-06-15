const http = new EasyHTTP();

http.get('https://ccm-backend.herokuapp.com/usuario', function(error, posts) {
   if(error) {
      console.log(error);
   } else {
      console.log(posts);
   }
});