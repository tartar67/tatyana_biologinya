const $ = (id) => document.getElementById(id);

$("greeting").textContent = siteData.teacher.greeting;
$("teacher-name").textContent = siteData.teacher.name;
$("teacher-subject").textContent = siteData.teacher.subject;
$("teacher-intro").textContent = siteData.teacher.intro;
$("teacher-about").textContent = siteData.teacher.about;
$("year").textContent = new Date().getFullYear();

const emailButton = $("email-button");
emailButton.href = `mailto:${siteData.teacher.email}`;

const materialsList = $("materials-list");
materialsList.innerHTML = siteData.materials.map(item => `
  <article class="material-card">
    <span class="material-type">${item.type}</span>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <a class="material-link" href="${item.file}" target="_blank" rel="noopener">Открыть материал →</a>
  </article>
`).join("");

const scheduleList = $("schedule-list");
scheduleList.innerHTML = siteData.schedule.map(item => `
  <div class="schedule-row">
    <div class="schedule-day">${item.day}</div>
    <div class="schedule-lessons">${item.lessons}</div>
  </div>
`).join("");

const menu = $("menu");
document.querySelector(".menu-toggle").addEventListener("click", () => {
  menu.classList.toggle("open");
});
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});
