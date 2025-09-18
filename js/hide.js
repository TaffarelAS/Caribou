function hide() {
    let element = document.getElementById('mySidebar');
    let button = document.getElementById('btnOpen')
    element.style.display = "none";
    button.style.display = "block";
     
}

function show() {
    let element = document.getElementById('mySidebar');
    let button = document.getElementById('btnOpen')
    element.style.display = "flex";
    button.style.display = "none";
}