import Link from 'next/link';
import { ReactNode } from 'react';

type BtnProps = {
	children: ReactNode;
};

const RedirectBtn = ({ children }: BtnProps) => {
	return <Link className='text-[1.5rem] underline' href='#'>{children} →</Link>;
};

export default RedirectBtn;
