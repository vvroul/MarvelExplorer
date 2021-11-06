fetch('developer.marvel.com/v1/public/comics')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));