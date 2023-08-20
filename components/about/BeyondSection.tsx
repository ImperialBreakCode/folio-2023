import { ReactNode } from 'react';

type BeyondProps = {
	children: ReactNode;
	title: string;
};

export const BeyondItem = ({ children, title }: BeyondProps) => {
	return (
		<div className='p-10 border-b-[1px] border-[#535353]'>
			<h3 className='text-6xl italic'>{title}</h3>

			{children}
		</div>
	);
};

export const BeyondRow = ({ children, title }: BeyondProps) => {
	return (
		<div className='flex flex-row items-center my-10'>
			<p className='text-3xl'>{title}</p>
			{children}
		</div>
	);
};

export const BeyondBuble = ({ children }: { children: ReactNode }) => {
	return (
		<p className='py-2 px-4 ms-4 border-[1px] border-black rounded-full text-xl'>
			{children}
		</p>
	);
};
