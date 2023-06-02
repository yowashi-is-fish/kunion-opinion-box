var itemRadios = document.getElementsByClassName("select-branch");

for (var i = 0; i < itemRadios.length; i++) {
	itemRadios[i].addEventListener("change", function() {

    var itemElement = document.getElementById(this.value);
    var itemElements = document.getElementsByClassName("branch");

    for (var j = 0; j < itemElements.length; j++) {
      if (itemElements[j] === itemElement) {
        itemElements[j].style.display = "block";
      } else {
        itemElements[j].style.display = "none";
      }
    }
  });
}
