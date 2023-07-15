import { gsap, Circ } from "gsap";

export default function InitAnimations(el: HTMLDivElement | null) : void{
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
}