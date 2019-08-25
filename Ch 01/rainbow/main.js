/* ah. changed some variable names */
const btnBgColorChange = document.getElementById('hBtnBgColorChange');

const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];

function backgroundColorChange() {
  document.body.style.background = rainbow[Math.floor(7*Math.random())];
}
btnBgColorChange.addEventListener('click', backgroundColorChange);
