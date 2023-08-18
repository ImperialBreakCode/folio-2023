'use client'

import { useAppSelector } from '@/state/hooks';
import { Variants, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type PageWrapperProps = {
	children: ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {

	const pagePathState = useAppSelector(state => state.changeRoutes);
	const realPath = usePathname();
	const [ variantState, setVariant ] = useState('regular');

	useEffect(() => {

		if (pagePathState != realPath) {
			setVariant('exit');
		}
		else{
			setVariant('regular');
			setTimeout(() => {
				ScrollTrigger.refresh();
			}, 1500)
		}

	}, [pagePathState])

	const variants : Variants = {
		init: {
			transform: 'translate(0, 200px)',
			opacity: 0,
		},
		regular: {
			opacity: 1,
			transform: 'translate(0, 0)',
			transition: {
				delay: 0.4,
				duration: 1,
				ease: 'easeInOut'
			}
		},
		exit: {
			transform: 'translate(0, -500px)',
			transition: {
				duration: 0.5,
				delay: 0.2,
				ease: 'easeInOut'
			}
		}
	}

	return (
		<motion.div
			initial={'init'}
			variants={variants}
			animate={variantState}
		>
			<main data-scroll-section>{children}</main>
		</motion.div>

	);
};

export default PageWrapper;
