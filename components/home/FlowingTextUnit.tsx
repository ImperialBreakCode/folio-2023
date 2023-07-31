'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	normalFlow?: boolean;
};

const FlowingTextUnit = ({ children, normalFlow }: Props) => {

	return (
		<motion.span
			animate={{
				x: ['-50%', '0%', '50%'],
			}}
			transition={{
				duration: 10,
				ease: normalFlow ? 'linear' : 'easeInOut',
				times: normalFlow ? [1] : [0, 0.3, 1],
				repeat: Infinity,
			}}
		>
			{children}
		</motion.span>
	);
};

export default FlowingTextUnit;
