var url = " https://jsonplaceholder.typicode.com/posts"

fetch(url).then(response => response.json())
.then(response => console.log(response))