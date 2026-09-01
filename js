console.log("Coding & Robotics Club frontend loaded");
const clubName = "Coding & Robotics Club";
const year = 2026;
let memberCount = 120;

function createWelcomeMessage(name) {
    return `Welcome ${name} to ${clubName}!`;
}

console.log(createWelcomeMessage("Student"));

const activities = [
    { title: "Web Development", level: "Beginner" },
    { title: "Robotics", level: "Intermediate" },
    { title: "Programming", level: "Beginner" }
];

activities.forEach(function (activity) {
    console.log(`${activity.title}: ${activity.level}`);
});
function getMembershipMessage(count) {
    if (count >= 100) {
        return "The club has a strong membership.";
    }

    return "The club is still growing.";
}

console.log(getMembershipMessage(memberCount));

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.querySelector("#name");
        const name = nameInput.value.trim();

        formStatus.textContent = `Thank you, ${name}. Your message is ready to be sent.`;
        contactForm.reset();
    });
}
<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mainNav">Menu</button>

<nav id="mainNav" aria-label="Main navigation">

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        const isOpen = mainNav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

ACTION	Append this fetch example. JSONPlaceholder is a public practice API; replace it later with the API used by your own project.
const loadDataButton = document.querySelector("#loadDataButton");
const apiStatus = document.querySelector("#apiStatus");
const apiResult = document.querySelector("#apiResult");

if (loadDataButton && apiStatus && apiResult) {
    loadDataButton.addEventListener("click", async function () {
        apiStatus.textContent = "Loading...";
        apiResult.textContent = "";

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
            }

            const data = await response.json();
            apiResult.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
            apiStatus.textContent = "Data loaded successfully.";
        } catch (error) {
            console.error(error);
            apiStatus.textContent = "Unable to load data. Check your connection and try again.";
        }
    });
