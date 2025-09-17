const buttons = document.querySelectorAll(".work-btn");
const contents = document.querySelectorAll(".work-content");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        contents.forEach(c => c.classList.remove("active"));
        const target = document.getElementById(btn.dataset.target);
        target.classList.add("active");
    });
});
