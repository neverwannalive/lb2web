function changeImage() {
  document.getElementById("images").src =
    "images/" + Math.floor(Math.random() * 9) + ".jpg";
}

function changeWidth() {
  document.getElementById("images").width =
    document.getElementById("width").value;
}

function changeHeight() {
  document.getElementById("images").height =
    document.getElementById("height").value;
}

function changeBorder() {
  document.getElementById("images").style.borderColor = "#413a3a";
  document.getElementById("images").border =
    document.getElementById("border").value;
}

function applied() {
  document.getElementById("images").alt =
    document.getElementById("new_alt").value;
  document.getElementById("new_alt").value = "";
}
