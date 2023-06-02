window.onload = function() {
  document.getElementsBy("reset").reset();
}

function check() {
  if (window.confirm('送信してよろしいですか？')) {
    submitted = true;
    return true;
  }
  else {
    return false;
  }
}
