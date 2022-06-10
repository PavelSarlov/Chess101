(() => {
    let loginBtn = document.getElementsByClassName('submit')[0].firstElementChild;

    loginBtn.addEventListener('click', (e) => {
        if (document.querySelector('flag-bg')) {
            window.location = './frontPage.html';
        }
        else {
            window.location = './frontPage-bg.html';
        }
        e.preventDefault()
    });
})();
