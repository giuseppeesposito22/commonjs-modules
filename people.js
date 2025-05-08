const fullName = require("./names");
const hobbies = require("./hobbies");

const init = () =>
  (person = {
    name: fullName("Giuseppe", "Esposito"),
    hobbies: hobbies("Sport", "Videogiochi", "Leggere"),
  });

console.log(init());
