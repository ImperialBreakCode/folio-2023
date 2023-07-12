import { ReactNode } from 'react';

type BtnProps = {
	children: ReactNode;
};

const RedirectBtn = ({ children }: BtnProps) => {
	return <button className='text-[1.5rem] underline'>{children} →</button>;
};

export default RedirectBtn;
