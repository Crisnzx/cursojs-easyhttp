function EasyHTTP() {
   this.http = new XMLHttpRequest();
}

// HTTP GET Request
EasyHTTP.prototype.get = function (url, callback) {

   this.http.open('GET', url, true);

   // fix the "this"problem in ES5 without arrow functions
   let self = this;
   let check = false;

   this.http.onload = function () {
      check = true;
      if (self.http.status === 200) {
         callback(null, self.http.responseText);

      } else {
         callback('Error: ' + self.http.status);
      }
   }

   if (!check) {
      callback('Error: ' + self.http.status);
   }
   this.http.send();
}

// HTTP POST Request

EasyHTTP.prototype.post = function(url, data, callback) {
   this.http.open('POST', url, true);
   this.http.setRequestHeader('Content-Type', 'application/json'); 

   let self = this;
   this.http.onload = function() {
      callback(null, self.http.responseText);
   }

   this.http.send(JSON.stringify(data));
}


// HTTP PUT Request

// HTTP DELETE Request