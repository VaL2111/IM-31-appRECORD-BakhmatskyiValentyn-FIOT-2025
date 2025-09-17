const mainButtons = document.querySelectorAll(".main-btn");
const contents = document.querySelectorAll(".work-content");
const secondaryButtons = document.querySelectorAll(".second-btn");
const contentBoxes = document.querySelectorAll(".answer-box");

mainButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const target = document.getElementById(targetId);

        contents.forEach(c => c.classList.remove("active"));
        target.classList.add("active");
    });
});

secondaryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const contentId = button.getAttribute("data-content");
        const content = document.getElementById(contentId);

        contentBoxes.forEach(c => c.classList.remove("active"));
        content.classList.add("active");
    });
});