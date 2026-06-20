const burger = document.querySelector('.nav-burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        burger.classList.toggle('open');
        burger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            burger.classList.remove('open');
            burger.setAttribute('aria-expanded', false);
            document.body.style.overflow = '';
        });
    });

document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        navLinks.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
    }
});

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
                const offset = window.innerWidth <= 600 ? 60 : 235;
                window.scrollTo({
                    top: window.scrollY + rect.top - offset,
                    behavior: "smooth"
                });
            }, 500);
        }
    });
});