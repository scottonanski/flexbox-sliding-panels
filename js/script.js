const titles = document.querySelectorAll(".title-banner");
const panels = document.querySelectorAll(".panel");
const wrappers = document.querySelectorAll(".inner-wrapper");

// const navBtns = document.querySelectorAll(".nav-btn");

titles.forEach((title) => {
    title.addEventListener("mouseover", () => {
        removeActiveClass();

        document
            .querySelector(`.panel-${title.dataset.banner_id}`)
            .classList.add("active");
    });
});

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}