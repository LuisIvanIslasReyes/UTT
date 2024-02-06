var url = "https://jsonplaceholder.typicode.com/users"

fetch(url, {
    method :"POST",
    header: {
        "Content_type": "application/json"
    },
    body: JSON.stringify({
        userId: 1,
        title: "Lorem"
    })
})