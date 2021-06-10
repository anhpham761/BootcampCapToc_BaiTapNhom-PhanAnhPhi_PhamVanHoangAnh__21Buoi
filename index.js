var checkbox_icon = (document.getElementById("checkbox_icon").onclick =
  function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      checkbox_icon.src = "./image/sun.png";
    } else {
      checkbox_icon.src = "./image/moon.png";
    }
  });

// var sun__moon = document.getElementById("sun__moon");
// sun__moon.onlick = function () {
//   document.body.classList.toggle("dark-theme");
// if (document.body.classList.contains("dark-theme")) {
//   sun__moon.src = "./image/sun.png";
// } else {
//   sun__moon.src = "./image/moon.png";
// }
// };
