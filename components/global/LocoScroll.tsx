'use client';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import InitAnimations from '@/utils/gsapAnimations';
import ScrollProgress from '@/utils/scrollProgress';
gsap.registerPlugin(ScrollTrigger);

type Props = {
	children: ReactNode;
};

const LocoScroll = ({ children }: Props) => {

	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {

		const element = containerRef.current as HTMLDivElement;
		let scroll : LocomotiveScroll | null;
		let ctx: gsap.Context | null;

		import('locomotive-scroll').then(locomotiveModule => {

			scroll = new locomotiveModule.default({
				el: element,
				smooth: true,
				//multiplier: 1
			});

			scroll.on('scroll', ScrollTrigger.update);
			scroll.on('scroll', ScrollProgress);

			// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
			ScrollTrigger.scrollerProxy(element, {
				scrollTop(value) {
					return arguments.length
						? (scroll as any).scrollTo(value, 0, 0)
						: (scroll as any).scroll.instance.scroll.y;
				}, // we don't have to define a scrollLeft because we're only scrolling vertically.
				getBoundingClientRect() {
					return {
						top: 0,
						left: 0,
						width: window.innerWidth,
						height: window.innerHeight,
					};
				},
				// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
				pinType: element.style.transform ? 'transform' : 'fixed',
			});

			ScrollTrigger.addEventListener('refresh', () => {scroll?.update()});
			ScrollTrigger.refresh();

			ctx = gsap.context(() => {
				InitAnimations(containerRef.current);
			}, containerRef);
		});



		return () => {

			if (ctx) {
				ctx.revert();
			}

			if (scroll) {
				scroll.destroy();
			}
		};

	}, []);

	return (
		<div id='loco-scroll' data-scroll-container ref={containerRef}>
			{children}
		</div>
	);
};

export default LocoScroll;
