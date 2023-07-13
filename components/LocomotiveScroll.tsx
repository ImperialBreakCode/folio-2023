'use client';

import { ReactNode, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

type Props = {
	children: ReactNode;
};

const LocomotiveScroll = ({ children }: Props) => {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
				multiplier: 1,
				// ... all available Locomotive Scroll instance options
			}}
			watch={
				[
					//..all the dependencies you want to watch to update the scroll.
					//  Basicaly, you would want to watch page/location changes
					//  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
				]
			}
			containerRef={containerRef}
		>
			<div data-scroll-container ref={containerRef} id='loco-cont'>
				{children}
			</div>
		</LocomotiveScrollProvider>
	);
};

export default LocomotiveScroll;
