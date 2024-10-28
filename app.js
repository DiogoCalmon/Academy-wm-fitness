const equipaments = document.querySelectorAll("#equipaments ul li");

equipaments.forEach(equipament => {
    equipament.addEventListener("click", () => {
        let image = document.querySelector(".images-of-equipaments img");
        let equip = equipament.textContent;

        console.log(`img/${equip}.jpg`);

        image.classList.add("fade-out");

        setTimeout(() => {
            image.setAttribute("src", `img/equipaments/${equip}.jpg`);

            image.onload = () => {
                image.classList.remove("fade-out");
                image.style.opacity = "1";
                image.style.transform = "scale(1)";
            };
        }, 500);
    });     
});



