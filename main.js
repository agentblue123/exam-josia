function changeImage(element) {
    element.setAttribute(
      "src",
      "https://advance2-exam.netlify.app/assets/img-header2.png"
    );
    // element.setAttribute("height", "300")
    // element.setAttribute("class", "jumbotron-img")
  }
  
  function changeImageBack(element) {
    element.setAttribute(
      "src",
      "https://advance2-exam.netlify.app/assets/img-header1.png"
    );
    // element.setAttribute("height", "300")
  }

  var btnLike = document.querySelector("#green");
var btnDislike = document.querySelector("#red");

if (btnLike) {
  btnLike.onclick = likeColor;
}
if (btnDislike) {
  btnDislike.onclick = dislikeColor;
}

function likeColor() {
  if (btnDislike.classList.contains("red")) {
    btnDislike.classList.remove("red");
    document.querySelector("body").style.color = "white";
    document.querySelector("body").style.background = "black";
  }

  this.classList.toggle("green");
}

function dislikeColor() {
  if (btnLike.classList.contains("green")) {
    btnLike.classList.remove("green");
    document.querySelector("body").style.color = "black";
    document.querySelector("body").style.background = "white";
  }

  this.classList.toggle("red");
}