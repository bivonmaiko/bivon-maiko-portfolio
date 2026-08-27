// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .service-card, .project-card, .experience-card, .stat-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
// ========================================
// TYPING EFFECT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const typingText = document.getElementById("typing-text");

    if (!typingText) {
        return;
    }

    const titles = [
        "ICT & NETWORKING PROFESSIONAL",
        "IT SUPPORT SPECIALIST",
        "NETWORK TROUBLESHOOTING SPECIALIST",
        "PYTHON DEVELOPER",
        "WEB DEVELOPER"
    ];

    let titleIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeTitle() {

        const currentTitle = titles[titleIndex];

        if (!deleting) {

            typingText.textContent =
                currentTitle.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentTitle.length) {

                deleting = true;

                setTimeout(typeTitle, 1800);

                return;
            }

        } else {

            typingText.textContent =
                currentTitle.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                titleIndex++;

                if (titleIndex >= titles.length) {
                    titleIndex = 0;
                }

            }

        }

        setTimeout(typeTitle, deleting ? 50 : 100);
    }

    typeTitle();

});