import Typed from "typed.js";

const hobby = ["GAMING", "CODING", "MUSIC", "COMMUNITY", "PHOTOGRAPHY"];

new Typed("#hobby", {
  strings: hobby,
  typeSpeed: 50,
  loop: true,
  cursorChar: "",
  smartBackspace: true,
  backDelay: 1000,
});

new Typed("#hobbyBg", {
  strings: hobby,
  typeSpeed: 50,
  loop: true,
  cursorChar: "",
  smartBackspace: true,
  backDelay: 1000,
});
