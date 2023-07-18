import Link from 'next/link';
import { ReactNode } from 'react';

type BtnProps = {
	children: ReactNode;
	className?: string;
};

const RedirectBtn = ({ children, className }: BtnProps) => {
	return (
		<div>
			<Link
				className={`text-[1.5rem] underline
			hover:bg-white hover:text-black hover:px-4 hover:font-medium
			transition-all duration-200 ${className}`}
				href='#'
			>
				{children} →
			</Link>
		</div>
	);
};

export default RedirectBtn;
