import { themeColors } from "../../config";
import { getSectionNumber } from "../../functions/functions";

function animateAppBar() {
    const sections = document.querySelectorAll("section");
    const bubble = document.querySelector(".navbar-bubble");

    const options = {
        threshold: 0.2
    };

    const navCheck = (enteries) => {
        enteries.forEach(entry => {
            const className = entry.target.className;
            const activeAnchor = document.querySelector(`[datapage=${className}]`);
            if (activeAnchor) {
                const coords = activeAnchor.getBoundingClientRect();
                const directions = {
                    height: "5px",
                    width: "5px",
                    top: coords.top + 18,
                    left: coords.left - 15,
                };
                if (entry.isIntersecting && bubble) {
                    bubble.style.setProperty("left", `${directions.left}px`);
                    bubble.style.setProperty("top", `${directions.top}px`);
                    bubble.style.setProperty("width", directions.width);
                    bubble.style.setProperty("height", directions.height);
                    bubble.style.setProperty("border-radius", "100%");
                    bubble.style.setProperty("background-color", themeColors.primaryColor);
                    activeAnchor.style.setProperty("color", themeColors.primaryColor);
                    document.getElementById("active-number").innerText = getSectionNumber(className);
                } else {
                    activeAnchor.style.setProperty("color", themeColors.black);
                }
            }
        });
    };

    let observer = new IntersectionObserver(navCheck, options);

    sections.forEach(section => {
        observer.observe(section);
    });
}

export default animateAppBar;