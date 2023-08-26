import { ReactNode } from 'react';

type BeyondProps = {
	children: ReactNode;
	title: string;
};

export const BeyondItem = ({ children, title }: BeyondProps) => {
	return (
		<div className='p-10 border-b-[1px] border-[#535353]'>
			<h3 className='text-4xl md:text-6xl italic'>{title}</h3>

			{children}
		</div>
	);
};

export const BeyondRow = ({ children, title }: BeyondProps) => {
	return (
		<div className='flex flex-col md:flex-row items-start md:items-center my-7 md:my-10'>
			<p className='text-2xl md:text-3xl mb-3 md:mb-0'>{title}</p>
			{children}
		</div>
	);
};

export const BeyondBuble = ({ children }: { children: ReactNode }) => {
	return (
		<p className='py-1 md:py-2 px-3 md:px-4 mb-2 md:ms-4 border-[1px] border-black rounded-full text-lg md:text-xl'>
			{children}
		</p>
	);
};
