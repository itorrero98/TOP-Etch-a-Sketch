const DARK_MODE_BTN = document.getElementById('dark-mode');
const LIGHT_MODE_BTN = document.getElementById('light-mode');
const GITHUB_ICON = document.getElementById('github-icon');

DARK_MODE_BTN.addEventListener('click', () => {
    console.log("clicked dark")
    let body = document.body;
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    DARK_MODE_BTN.classList.add('hidden');
    LIGHT_MODE_BTN.classList.remove('hidden');
    GITHUB_ICON.classList.add('dark');
    GITHUB_ICON.classList.remove('light');
});
LIGHT_MODE_BTN.addEventListener('click', () => {
    console.log("clicked dark")

    let body = document.body;
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    DARK_MODE_BTN.classList.remove('hidden');
    LIGHT_MODE_BTN.classList.add('hidden');
    GITHUB_ICON.classList.add('light');
    GITHUB_ICON.classList.remove('dark');
});