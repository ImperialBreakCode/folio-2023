'use client';

import FolioRoutes from '@/routes';
import { routeState } from '@/state/actions';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { Variants, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

type ContainerProps = {
	children: ReactNode;
};

const ContentContainer = ({ children }: ContainerProps) => {
	const [variantState, setVariant] = useState('init');
	const currentRoute = useAppSelector((state) => state.changeRoutes);
	const location = currentRoute.substring(1);

	const path = usePathname();
    const dispatcher = useAppDispatch();
    const changeRouteState = routeState();

	useEffect(() => {
		setVariant('show');

		setTimeout(() => {
			setVariant('hide');
		}, 1300);

		setTimeout(() => {
			setVariant('init');
		}, 1900);
	}, [currentRoute]);


    useEffect(() => {

        changeRouteState(dispatcher, path as FolioRoutes);

    }, []);

	const variants: Variants = {
		init: {
			y: '100%',
			clipPath: 'ellipse(50% 0% at 50% 100%)',
			transition: {
				duration: 0,
			},
		},
		show: {
			y: '0%',
			clipPath: 'ellipse(100% 100% at 50% 50%)',
			transition: {
				duration: 0.5,
				delayChildren: 0.5,
				ease: 'easeInOut'
			},
		},
		hide: {
			clipPath: 'ellipse(50% 0% at 50% 0%)',
			y: '-100%',
			transition: {
				duration: 0.5,
			},
		},
	};

	const firstChildVariants: Variants = {
		init: {
			opacity: 1,
		},
		show: {
			opacity: 0,
			transition: {
				duration: 0.1,
			},
		},
		hide: {
			opacity: 0,
			transition: {
				duration: 0,
			},
		},
	};

	const secondChildVariants: Variants = {
		init: {
			opacity: 0,
			y: '100%',
			x: '-50%'
		},
		show: {
			opacity: 1,
			y: '-50%',
			x: '-50%',
			transition: {
				duration: 0.3,
			},
		},
		hide: {
			opacity: 1,
			y: '-50%',
			x: '-50%',
		},
	};

	return (
		<div>
			<motion.div
				animate={variantState}
				variants={variants}
				className='fixed top-0 left-0 w-[100vw] h-[100vh] page-into z-[3000]'
			>
				<div className='h-full flex flex-col items-center justify-center text-7xl relative'>
					<h2>
						<motion.span
							variants={firstChildVariants}
							className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
							Page
						</motion.span>
						<motion.span
							variants={secondChildVariants}
							className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] capitalize'
						>
							{location.length === 0 ? 'home' : location}
						</motion.span>
					</h2>
				</div>
			</motion.div>

			{children}
		</div>
	);
};

export default ContentContainer;
