// LOADING HTML DATA:
// get the references to container and button
const container = document.querySelector(".container");
const btns = document.querySelectorAll(".active");

// save the path to your partial into variable url
let url = "./partials/article.html";

// register btn for click event
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", handleClick)
}

// AJAX runs when the button is clicked!
function handleClick(e) {
    e.preventDefault();

    if (e.target.textContent === "Home") {
        let url = "./partials/article.html";
        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                container.innerHTML = data;
            })
            .catch(function (error) {
                console.log(error.message);
            });
    } else if (e.target.textContent === "Portfolio") {
        let url = "./partials/portfolio.html";
        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                container.innerHTML = data;
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }
}

fetch(url)
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        container.innerHTML = data;
    })
    .catch(function (error) {
        console.log(error.message);
    });
