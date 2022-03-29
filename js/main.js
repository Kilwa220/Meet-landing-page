let gallery = document.styleSheets[2];
let toTop = document.querySelector(".to-top");

window.onscroll = function (e) {
  if (window.scrollY >= "400") {
    gallery.rules[13].style["backgroundColor"] = "#4d96a9";
    gallery.rules[30].style["backgroundColor"] = "#4d96a9";
    gallery.rules[30].style["borderColor"] = "#4d96a9";
    gallery.rules[30].style.color = "white";

    toTop.style.display = "initial";
  } else {
    gallery.rules[13].style["backgroundColor"] = "#dddddd";
    gallery.rules[30].style["backgroundColor"] = "white";
    gallery.rules[30].style["borderColor"] = "#dddddd";
    gallery.rules[30].style.color = "#333";

    toTop.style.display = "none";
  }

  if (window.scrollY >= 900) {
    gallery.rules[29].style["backgroundColor"] = "#855fb1";
    gallery.rules[43].style["backgroundColor"] = "#855fb1";
    gallery.rules[43].style["borderColor"] = "#855fb1";
    gallery.rules[43].style.color = "white";
  } else {
    gallery.rules[29].style["backgroundColor"] = "#dddddd";
    gallery.rules[43].style["backgroundColor"] = "white";
    gallery.rules[43].style["borderColor"] = "#dddddd";
    gallery.rules[43].style.color = "#333";
  }
};

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
