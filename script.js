
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website is running!");

    const heading = document.querySelector("h1");

    if (heading) {
        heading.addEventListener("click", function () {
            alert("Welcome to my website!");
        });
    }
});
