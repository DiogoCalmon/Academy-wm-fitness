const equipaments = document.querySelectorAll("#equipaments ul li");

equipaments.forEach(equipament => {
    equipament.addEventListener("click", () => {
        let image = document.querySelector(".images-of-equipaments img");
        let equip = equipament.textContent;

        image.classList.remove("fade-out");
        void image.offsetWidth;
        image.classList.add("fade-out");

        setTimeout(() => {
            image.setAttribute("src", `img/equipaments/${equip}.jpg`);

            image.onload = () => {
                image.classList.remove("fade-out");
            };
        }, 500);
    });     
});



