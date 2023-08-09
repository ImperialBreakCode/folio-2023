'use client'

import { toggleMenu } from "@/state/actions";
import { useAppDispatch } from "@/state/hooks";
import { TfiClose } from 'react-icons/tfi';

const CloseBtn = () => {
	const dispatch = useAppDispatch();
	const menuToggle = toggleMenu();

	return (
		<button
			onClick={() => menuToggle(dispatch)}
			className='p-5 md:p-10 my-5 rounded-full close-menu-btn group relative md:border-[1px] border-black md:ms-auto'
		>
			<span
				style={{ transform: 'translate(-50%, -50%)' }}
				className='absolute top-1/2 left-1/2 invert group-hover:invert-0 z-[2001]'
			>
				<TfiClose className='font-bold' />
			</span>
			<span
				style={{ transform: 'translate(-50%, -50%)' }}
				className='absolute block top-1/2 left-1/2 w-0 h-0 group-hover:w-full group-hover:h-full
						rounded-full hover-span transition-all z-[2000]'
			></span>
		</button>
	);
};

export default CloseBtn;