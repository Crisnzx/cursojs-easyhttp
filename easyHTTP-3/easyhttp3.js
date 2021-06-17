/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @author Brad Traversy and Cristovão Neto
 * @license MIT
 * 
 */

// IMPORTANT: 2 THINGS REMAINING
// 1 - ERROR HANDLING WITH ASYNC AWAIT
// 2 - SHOW DATA AS A TABLE FOR THE USER IN THE UI INSTEAD OF USING CONSOLE

class EasyHTTP {

   async get(url) {
      const response = await fetch(url);
      const resData = await response.json();
      return resData;

   }

   async post(url, data) {

      const response = await fetch(url, {
         method: 'POST',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(data)
      });

      const resData = await response.json();
      return resData;
   }

   async put(url, data) {

      const response = await fetch(url, {
         method: 'PUT',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(data)
      });

      const resData = await response.json();
      return resData;

   }

   async delete(url) {

         const response = await fetch(url, {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json'
            }
         })

         const resData = 'User deleted successfully';
         return resData;

   }
}
