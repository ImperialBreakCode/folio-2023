import { OnScrollEvent } from "locomotive-scroll";

export default function ScrollProgress(e: OnScrollEvent){

    MenuScrollAction(e);
    HorizontalWorksScroll(e);
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

        const images : HTMLElement[] = [];
        const descriptions: HTMLElement[] = [];

        for (let i = 1; i <= 3; i++) {
            const img = document.getElementById(`img${i}`) as HTMLElement;
            const descr = document.getElementById(`pr${i}`) as HTMLElement;

            images.push(img);
            descriptions.push(descr);
        }

        ClearStyles(images, descriptions);

        if (progress < 0.1) {
            ApplyStylesForElement(0, images, descriptions);
        }
        else if(progress < 0.4){
            ApplyStylesForElement(1, images, descriptions);
        }
        else{
            ApplyStylesForElement(2, images, descriptions);
        }
    }
}

function ApplyStylesForElement(i: number, images: HTMLElement[], descriptions: HTMLElement[]){
    images[i].style.transform = 'scale(1.25)';
    descriptions[i].style.display = 'block';
}

function ClearStyles(images : HTMLElement[], descriptions: HTMLElement[]){

    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = '';
        descriptions[i].style.display = '';
    }
}