function openScreen() {
    document.getElementById("wrapper").style.width = "100%";
}
  
function closeScreen() {
    document.getElementById("wrapper").style.width = "0%";
}

(() => {
    let createLobby = document.getElementById('createLobby');
    
    createLobby.addEventListener('click', (e) => {
        openScreen();

        let cancel = document.getElementById('cancel');
    
        cancel.addEventListener('click', (e) => {
            closeScreen();
            e.preventDefault();
        });

        e.preventDefault();
    });    
})();