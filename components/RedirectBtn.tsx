import Link from 'next/link';
import { ReactNode } from 'react';

type BtnProps = {
	children: ReactNode;
};

const RedirectBtn = ({ children }: BtnProps) => {
	return (
		<Link
			className='text-[1.5rem] underline
			hover:bg-white hover:text-black hover:px-4 hover:font-medium
			transition-all duration-200'
			href='#'
		>
			{children} →
		</Link>
	);
};

export default RedirectBtn;
