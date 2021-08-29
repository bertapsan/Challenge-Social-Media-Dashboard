'use strict';

const change = document.getElementById('check');
change.addEventListener('change', checkingCheckbox, false);
function checkingCheckbox() {
  let checked = change.checked;
  if (checked) {
    document.getElementById('styles').href = './assets/css/mainDark.css';
  } else {
    document.getElementById('styles').href = './assets/css/main.css';
  }
}
