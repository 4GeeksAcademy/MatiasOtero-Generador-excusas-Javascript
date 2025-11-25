import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car','my keys'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function getRandPos(lista) {
    let num = Math.floor(Math.random() * (lista.length - 1)) + 1;
    return num
  }
// Esto fue lo primero que se me vino a al cabeza, pero luego se me ocurrió una manera más escalable de hacerlo con la función, de esta forma el numero de elementos puede cambiar y funciona igual
/*   const randWho = Math.floor(Math.random() * 3) + 1
  const randAct = Math.floor(Math.random() * 3) + 1
  const randwhat = Math.floor(Math.random() * 3) + 1
  const randWhen = Math.floor(Math.random() * 4) + 1 */

  //document.getElementById("excuse").innerHTML = `${who[randWho]} ${action[randAct]} ${what[randwhat]} ${when[randWhen]}`;
  document.getElementById("excuse").innerHTML = `${who[getRandPos(who)]} ${action[getRandPos(action)]} ${what[getRandPos(what)]} ${when[getRandPos(when)]}`;
};
