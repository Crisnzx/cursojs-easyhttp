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
      if (response.ok) {
         const resData = await response.json();
         return resData;

      } else {
         throw new Error(`Error ${response.status} ${response.statusText}`);

      }
   }

   async post(url, data) {

      const response = await fetch(url, {
         method: 'POST',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(data)
      });

      if (response.ok) {
         const resData = await response.json();
         return resData;

      } else {
         throw new Error(`Error ${response.status} ${response.statusText}`);
      }

   }

   async put(url, data) {

      const response = await fetch(url, {
         method: 'PUT',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(data)
      });

      if (response.ok) {
         const resData = await response.json();
         return resData;
      } else {
         throw new Error(`Error ${response.status} ${response.statusText}`);
      }

   }

   async delete(url) {

      const response = await fetch(url, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json'
         }
      })

      if (response.ok) {
         return 'User deleted successfully';
      } else {
         throw new Error(`Error ${response.status} ${response.statusText}`);
      }


   }
}
