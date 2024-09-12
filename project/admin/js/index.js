['header', 'footer', 'logout'].forEach(id => {
    fetch(`${id}.html`).then(res => res.text()).then(html => document.getElementById(id).innerHTML = html);
});

const isLoggedIn = sessionStorage.getItem('isLoggedIn');
if (!isLoggedIn) {
    window.location.href = '../index.html';
}

function logout() {
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "../index.html";
}

function mainController() {
    document.querySelectorAll('td.pointer').forEach(td => {
    td.addEventListener('click', function() {
        const link = this.querySelector('a');
        if (link) {
            window.location.href = link.href;
        }
    });
});

}