window.onload = pageLoad;

function pageLoad(){
    const fullPath = window.location.pathname;
    const fileName = fullPath.split('/').pop();
    if(fileName == "index.html"){
        indexPopUp();
    }else{
        projectPopUp();
    }
}

function handleSectionMouseEnter(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.transform = "scale(1.05)";
    section.style.transition = "transform 0.3s";
}

function handleSectionMouseLeave(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.transform = "scale(1)";
    section.style.transition = "transform 0.3s";
}
function indexPopUp(){
    document.getElementById("projectimg").addEventListener("mouseenter", () => handleSectionMouseEnter("projectimg"));
    document.getElementById("projectimg").addEventListener("mouseleave", () => handleSectionMouseLeave("projectimg"));
}

function projectPopUp(){
    document.getElementById("tankicon").addEventListener("mouseenter", () => handleSectionMouseEnter("tankicon"));
    document.getElementById("tankicon").addEventListener("mouseleave", () => handleSectionMouseLeave("tankicon"));
    document.getElementById("knighticon").addEventListener("mouseenter", () => handleSectionMouseEnter("knighticon"));
    document.getElementById("knighticon").addEventListener("mouseleave", () => handleSectionMouseLeave("knighticon"));
    document.getElementById("archericon").addEventListener("mouseenter", () => handleSectionMouseEnter("archericon"));
    document.getElementById("archericon").addEventListener("mouseleave", () => handleSectionMouseLeave("archericon"));
    document.getElementById("mageicon").addEventListener("mouseenter", () => handleSectionMouseEnter("mageicon"));
    document.getElementById("mageicon").addEventListener("mouseleave", () => handleSectionMouseLeave("mageicon"));
    document.getElementById("healericon").addEventListener("mouseenter", () => handleSectionMouseEnter("healericon"));
    document.getElementById("healericon").addEventListener("mouseleave", () => handleSectionMouseLeave("healericon"));
    document.getElementById("bardicon").addEventListener("mouseenter", () => handleSectionMouseEnter("bardicon"));
    document.getElementById("bardicon").addEventListener("mouseleave", () => handleSectionMouseLeave("bardicon"));
}
