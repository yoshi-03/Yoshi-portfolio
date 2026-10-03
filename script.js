const works = document.querySelectorAll(".works a");

works.forEach(function (work) {

  work.addEventListener("mouseenter", function () {

    work.style.paddingLeft = "15px";

  });


  work.addEventListener("mouseleave", function () {

    work.style.paddingLeft = "0";

  });

});

const themeButton = document.querySelector("#themeButton");

if (themeButton) {
  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
}