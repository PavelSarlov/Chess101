(() => {
    let loginBtn = document.getElementsByClassName('submit')[0].firstElementChild;

    loginBtn.addEventListener('click', (e) => {
        location.replace('./frontPage.html');
        e.preventDefault()
    });
})();