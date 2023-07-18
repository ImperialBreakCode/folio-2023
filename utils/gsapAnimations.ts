import { gsap, Circ } from "gsap";

export default function InitAnimations(el: HTMLDivElement | null){

    // about me keft section appearing and dissapearing
    gsap.from('#about-me-left-sec', {
        scrollTrigger: {
            trigger: '#about-me-left-sec',
            toggleActions: 'restart none none reverse',
            start: 'center 80%',
            end: 'center',
            scroller: el,
            //markers: true,
        },
        ease: Circ.easeInOut,
        duration: 1,
        x: -(document.querySelector('#about-me-left-sec')?.clientWidth ?? 0),
    });

    gsap.from('#works-showcase', {
        scrollTrigger: {
            trigger: '#showcase-trigger',
            scroller: el,
            start: 'top 80%',
            end: 'top 45%',
            //markers: true,
            scrub: 2,
        },
        scale: 0.5
    });

    gsap.to('#works-slider', {
        scrollTrigger: {
            trigger: '#slider-trigger',
            scroller: el,
            start: 'top bottom',
            end: 'bottom top',
            //markers: true,
            scrub: true,
        },
        x: '-77%'
    });
}