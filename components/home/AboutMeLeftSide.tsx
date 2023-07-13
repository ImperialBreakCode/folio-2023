'use client'

import { useLayoutEffect, useRef } from "react";
import RedirectBtn from "../common/RedirectBtn";
import LeftSphere from "./LeftSphere";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutMeLeftSide = () => {

	let ref = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {

		let scrollingElement = ref.current;

		setTimeout(() => {
			// continue tomorrow
		});

	}, []);

	return (
		<div ref={ref} className='flex items-center flex-col'>
			<LeftSphere />
			<RedirectBtn>More about me</RedirectBtn>
		</div>
	);
};

export default AboutMeLeftSide;
