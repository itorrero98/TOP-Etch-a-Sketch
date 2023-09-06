const DARK_MODE_BTN = document.getElementById('dark-mode-filled');
const LIGHT_MODE_BTN = document.getElementById('light-mode-filled');
const DARK_MODE_CONTAINER = document.getElementById('dark-mode-container');
const LIGHT_MODE_CONTAINER = document.getElementById('light-mode-container');
const GITHUB_ICON = document.getElementById('github-icon');

DARK_MODE_BTN.addEventListener('click', () => {
    let body = document.body;
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    DARK_MODE_CONTAINER.classList.add('hidden');
    LIGHT_MODE_CONTAINER.classList.remove('hidden');
    GITHUB_ICON.classList.add('dark');
    GITHUB_ICON.classList.remove('light');
});
LIGHT_MODE_BTN.addEventListener('click', () => {
    let body = document.body;
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    DARK_MODE_CONTAINER.classList.remove('hidden');
    LIGHT_MODE_CONTAINER.classList.add('hidden');
    GITHUB_ICON.classList.add('light');
    GITHUB_ICON.classList.remove('dark');
});