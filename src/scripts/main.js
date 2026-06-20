const projectItems = document.querySelectorAll(".project-item");

projectItems.forEach(item => {
    const summary = item.querySelector(".project-summary");

    summary.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");

        projectItems.forEach(project => {
            project.classList.remove("active");
        });

        if (!isOpen) {
            item.classList.add("active");

            const preview = item.querySelector(".project-preview");

            setTimeout(() => {
                const rect = preview.getBoundingClientRect();
                window.scrollTo({
                    top: window.scrollY + rect.top - 235,
                    behavior: "smooth"
                });
            }, 500);
        }
    });
});