// ساختمان داده در اینجا json هست ()
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw Error(response.status);
        }
    })
    .then((obj) => {
        console.log("userId", obj.userId);
        console.log(obj.title);
        console.log("id", obj.id);
    })
    .catch((error) => console.log("Error MSG: ", error));

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw Error(response.status);
        }
    })
    .then((obj) => console.log(obj.title))
    .catch((error) => console.log(error));
