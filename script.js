// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ==========================================
// HEADER SHADOW
// ==========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// ==========================================
// BACK TO TOP
// ==========================================

const backTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================================
// REVEAL ANIMATION
// ==========================================

const reveals = document.querySelectorAll(
    ".about,.skills,.projects,.contact,.project-card,.skill-card,.stat-card"
);

function revealElements() {

    const trigger = window.innerHeight - 120;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

}

reveals.forEach(item => {

    item.classList.add("reveal");

});

window.addEventListener("scroll", revealElements);

revealElements();

// ==========================================
// ACTIVE NAVBAR LINK
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================================
// CURRENT YEAR
// ==========================================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Arish Usman. All Rights Reserved.`;

}

console.log(
    "%cPortfolio Loaded Successfully",
    "color:#2563eb;font-size:16px;font-weight:bold;"
);

// ==========================================
// RENDER PROJECTS
// ==========================================

const projectsContainer = document.getElementById("projectsGrid");

function renderProjects() {

    if (!projectsContainer || typeof projects === "undefined") return;

    projectsContainer.innerHTML = "";

    projects.forEach(project => {

        const tech = project.technologies
            .map(item => `<span class="tech">${item}</span>`)
            .join(" ");

        projectsContainer.innerHTML += `

        <article class="project-card">

            <img src="${project.image}" alt="${project.title}">

            <div class="project-content">

                <small class="project-category">
                    ${project.category}
                </small>

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <div class="tech-stack">

                    ${tech}

                </div>

                <div class="project-links">

                    <a href="${project.liveDemo}" target="_blank">
                        Live Demo
                    </a>

                    <a href="${project.github}" target="_blank">
                        GitHub
                    </a>

                </div>

            </div>

        </article>

        `;

    });

}

renderProjects();

renderProjects();