'use client'

import { useLayoutEffect, useRef } from "react";
import RedirectBtn from "../common/RedirectBtn";
import LeftSphere from "./LeftSphere";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutMeLeftSide = () => {

	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {

		let scrollingElement = ref.current;

		let t1 = gsap.timeline();

		setTimeout(() => {
			t1.to(scrollingElement, {
				scrollTrigger: {
					trigger: scrollingElement,
					start: 'top center',
					scroller: '.app-scroller',
					scrub: true,
					markers: true
				},
				ease: 'none',
				x: 100
			});

			ScrollTrigger.refresh();
		}, 1000);

	}, []);

	return (
		<div ref={ref} className='flex items-center flex-col'>
			<LeftSphere />
			<RedirectBtn>More about me</RedirectBtn>
		</div>
	);
};

export default AboutMeLeftSide;
