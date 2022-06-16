// document.onkeydown = checkKeycode

// function checkKeycode(e) {
//   let keycode;
//   if (window.event)
//     {keycode = window.event.keyCode;}
//   else if (e)
//     {keycode = e.which;}
//   alert("keycode: " + keycode);
// }


// This function clear all the values
function clearScreen() {
  document.getElementById("answer").value = "";
}


// This function display values
function display(value) {
  document.getElementById("answer").value += value;
}

// This function evaluates the expression and return result
function calculate() {
  let p = document.getElementById("answer").value;
  let q = eval(p);
  document.getElementById("answer").value = q;
}


// const keydowned = document.getElementsByTagName('input');

// document.addEventListener('click' , function () {
//   for (let i = 0; i < keydowned.length; i++) {
//     keydowned[i].classList.toggle('hovered-key');
//   } 
// });



document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
    case  13:
      calculate();
      break;
    case  46:
      clearScreen();
      break;
    case  96:
      display(0);
      break;
    case  97:
      display(1);
      break;
    case  98:
      display(2);
      break;
    case  99:
      display(3);
      break;
    case  100:
      display(4);
      break;
    case  101:
      display(5);
      break;
    case  102:
      display(6);
      break;
    case  103:
      display(7);
      break;
    case  104:
      display(8);
      break;
    case  105:
      display(9);
      break;
    case  107:
      display('+');
      break;
    case  109:
      display('-');
      break;
    case  106:
      display('*');
      break;
    case  111:
      display('*');
      break;
    default:
      console.log('Non hai selezionato alcuna operazione');
  }

  


});
