function toggle_menu() { 
    const links = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");  
    links.classList.toggle("open");
    icon.classList.toggle("open");

}