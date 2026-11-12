import fungsiFilter from "./fungsiFilter.js";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>res.json())
  .then(data => {
    const temp = [];
    data.forEach(user => {
      temp.push(user.name);
    });
    console.log(fungsiFilter(temp, "l"));
  });