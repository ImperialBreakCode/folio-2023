import LocomotiveScroll from "locomotive-scroll";

export default function ScrollProgress(e: LocomotiveScroll.OnScrollEvent){

    const menuElement = document.getElementById('menu-desktop') as HTMLButtonElement;

    if (e.scroll.y >= 120) {
        menuElement.style.opacity = '1';
        menuElement.style.transform = `translate(0, 0)`;
    }
    else {
        menuElement.style.opacity = '0';
        menuElement.style.transform = `translate(0, -20rem)`;
    }
}