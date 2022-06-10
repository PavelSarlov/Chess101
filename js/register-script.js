(() => {
    let registerBtn = document.getElementsByClassName('submit')[0].firstElementChild;

    registerBtn.addEventListener('click', (e) => {
        location.replace('./login.html');
        e.preventDefault()
    });
})();