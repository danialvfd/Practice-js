function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);


interface Book {
    title: string;
    author: string;
    yearPublished: number;
  }

  let book1: Book = {
    title: "قلعه حیوانات",
    author: "جورج اورول",
    yearPublished: 1945,
  };

  let book2: Book = {
    title: "شاهنامه",
    author: "فردوسی"
  }