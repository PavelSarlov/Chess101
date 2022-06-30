(() => {
    let registerBtn = document.getElementsByClassName('submit')[0].firstElementChild;

    registerBtn.addEventListener('click', (e) => {
        if (document.querySelector('flag-bg')) {
            window.location = './login.html';
        }
        else {
            window.location = './login-bg.html';
        }
        e.preventDefault()
    });
})();
