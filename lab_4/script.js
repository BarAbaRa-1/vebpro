
localStorage.setItem("userAgent", navigator.userAgent);
localStorage.setItem("platform", navigator.platform);
localStorage.setItem("language", navigator.language);
localStorage.setItem("cookieEnabled", navigator.cookieEnabled);
localStorage.setItem("screenSize", screen.width + "x" + screen.height);


let info = document.getElementById("info");

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    let p = document.createElement("p");
    p.textContent = key + ": " + value;
    info.appendChild(p);
}




let variant = 13;
let reviews = document.getElementById("reviews");

fetch("https://jsonplaceholder.typicode.com/posts/" + variant + "/comments")
    .then(function (response) {
        return response.json();
    })
    .then(function (comments) {
        reviews.innerHTML = "";

        for (let i = 0; i < comments.length; i++) {
            let div = document.createElement("div");
            div.className = "review";

            let name = document.createElement("h4");
            name.textContent = comments[i].name;

            let email = document.createElement("p");
            email.textContent = comments[i].email;
            email.className = "review-email";

            let text = document.createElement("p");
            text.textContent = comments[i].body;

            div.appendChild(name);
            div.appendChild(email);
            div.appendChild(text);
            reviews.appendChild(div);
        }
    })
    .catch(function (error) {
        console.log("Помилка:", error);

        reviews.textContent = navigator.onLine 
            ? "Не вдалося завантажити відгуки :(" 
            : "Відсутнє підключення до мережі Інтернет";
    });




let modal = document.getElementById("modal");
let closeBtn = document.getElementById("close-btn");

setTimeout(function () {
    modal.style.display = "flex";
}, 60000); 

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});




let themeBtn = document.getElementById("theme-btn");
let hours = new Date().getHours();


if (currentTheme === "light") {
    document.body.classList.add("light");
} else {
    document.body.classList.remove("light");
}


themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");
});