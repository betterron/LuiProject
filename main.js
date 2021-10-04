let fadePoint = document.querySelector("#fade-point").offsetTop - 700;
let backgroundElement = document.querySelector(".intro")

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        var opac = (window.pageYOffset / fadePoint);
        backgroundElement.style.background = "linear-gradient(rgba(237, 237, 237, " + opac + "), rgba(237, 237, 237, " + opac + ")), url(./img/intro.jpeg) no-repeat right top";
        backgroundElement.style.backgroundSize = 'cover';
    }
}

