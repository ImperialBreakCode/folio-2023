import { OnScrollEvent } from "locomotive-scroll";

export default function ScrollProgress(e: OnScrollEvent){

    MenuScrollAction(e);
    HorizontalWorksScroll(e);
    ProjectDescription(e);
}

function MenuScrollAction(e: OnScrollEvent){

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

function HorizontalWorksScroll(e: OnScrollEvent){

    const scrollId = 'projects-horizontal';

    if(typeof e.currentElements[scrollId] === 'object') {
        let progress = e.currentElements[scrollId].progress;

        const img = document.getElementById('img1') as HTMLElement;
        const img2 = document.getElementById('img2') as HTMLElement;
        const img3 = document.getElementById('img3') as HTMLElement;

        ClearImageTrasnformStyles([img, img2, img3]);

        if (progress < 0.1) {
            img.style.transform = 'scale(1.25)';
        }
        else if(progress < 0.4){
            img2.style.transform = 'scale(1.25)';
        }
        else{
            img3.style.transform = 'scale(1.25)';
        }
    }
}

function ProjectDescription(e: OnScrollEvent){

    
}

function ClearImageTrasnformStyles(elements : HTMLElement[]){

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.transform = '';
    }
}