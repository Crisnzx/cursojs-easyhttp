function EasyHTTP() {
   this.http = new XMLHttpRequest();
}

// HTTP GET Request
EasyHTTP.prototype.get = function(url, callback) {

   this.http.open('GET', url, true);

   let self = this;
   let check = false;

   this.http.onload = function() {
      check = true;
      if(self.http.status === 200) {
         callback(null, self.http.responseText);

      } else {
         callback('Error: ' + self.http.status);
      }
   }

   if(!check) {
      callback('Error: ' + self.http.status);
   }
   this.http.send();
}

// HTTP POST Request

/* EasyHTTP.prototype.post = function(url, data, callback) {
 
}
*/

// HTTP PUT Request

// HTTP DELETE Request