/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Brad Traversy and Cristovão Neto
 * @license MIT
 * 
 */

class EasyHTTP {

   get(url) {

      return new Promise((resolve, reject) => {
         fetch(url)
            .then(response => {
               if(response.ok) {
                  return response.json();
               } else {
                  return Promise.reject({
                     status: response.status,
                     statusText: response.statusText
                  });
               }
            })
            .then(data => resolve(data))
            .catch(error => reject(`Error ${error.status} ${error.statusText}`));
      });

   }

   post(url, data) {

      return new Promise((resolve, reject) => {
         fetch(url, {
            method: 'POST',
            headers: {
               'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
         })
         .then(response => {
            if(response.ok) {
               return response.json();
            } else {
               return Promise.reject({
                  status: response.status,
                  statusText: response.statusText
               });
            }
         })
         .then(data => resolve(data))
         .catch(error => reject(`Error ${error.status} ${error.statusText}`));
      });
   }

   put(url, data) {
      return new Promise((resolve, reject) => {
         fetch(url, {
            method: 'PUT',
            headers: {
               'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
         })
         .then(response => {
            if(response.ok) {
               return response.json();
            } else {
               return Promise.reject({
                  status: response.status,
                  statusText: response.statusText
               });
            }
         })
         .then(data => resolve(data))
         .catch(error => reject(`Error ${error.status} ${error.statusText}`));
      });
   }

   delete(url) {
      return new Promise((resolve, reject) => {
         fetch(url, {
            method: 'DELETE',
            headers: {
               'Content-type': 'application/json'
            }
         })
         .then(response => response.json())
         .then(() => resolve('User deleted successfully'))
         .catch(error => reject(`Error`));
      });
   }
}
