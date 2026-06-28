window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1300);
});

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

function sendEmail() {
    const name    = document.getElementById('nameData');
    const email   = document.getElementById('emailData');
    const message = document.getElementById('messageData');
    const fields  = [name, email, message];

    fields.forEach(el => el.classList.add('touched'));

    const allFilled   = fields.every(el => el.value.trim() !== '');
    const emailValid  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

    if (!allFilled || !emailValid) return;

    const info = {
        nameData:    name.value,
        emailData:   email.value,
        messageData: message.value
    };

    emailjs.send("service_azi5l3k", "template_w5dzix5", info)
        .then(() => {
            fields.forEach(el => {
                el.value = '';
                el.classList.remove('touched');
            });
            showPopup();
        });
}

function showPopup() {
    document.getElementById('popup').classList.add('open');
}

function closePopup() {
    document.getElementById('popup').classList.remove('open');
}