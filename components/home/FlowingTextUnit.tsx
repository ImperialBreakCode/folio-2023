'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

type Props = {
	children: ReactNode;
};

const FlowingTextUnit = ({ children }: Props) => {

	return (
		<motion.span
			animate={{
				x: ['-50%', '0%', '50%'],
			}}
			transition={{
				duration: 10,
				ease: 'easeInOut',
				times: [0, 0.3, 1],
				repeat: Infinity,
			}}
		>
			{children}
		</motion.span>
	);
};

export default FlowingTextUnit;
