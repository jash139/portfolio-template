import { contactLinks } from "../config";

const copyEmail = () => {
    var tempInput = document.createElement("input");
    tempInput.value = contactLinks.email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
};

const getSectionNumber = (section) => {
    switch (section) {
        case "projects":
            return "02";
        case "skills":
            return "03";
        case "about":
            return "04";
        case "contact":
            return "05";
        default:
            return "01";
    }
};

function openTab(url) {
    window.open(url, '_blank')
}

const scrollToSection = (id) => {
    var element = document.getElementById(id);
    element.scrollIntoView();
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export { copyEmail, getSectionNumber, openTab, scrollToSection, scrollToTop };