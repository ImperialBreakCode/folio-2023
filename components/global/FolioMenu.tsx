'use client'

import { useAppSelector } from '@/state/hooks';

const FolioMenu = () => {
	const menuIsOpen = useAppSelector((state) => state.menuToggle);

	return (
		<div
			style={{ display: menuIsOpen ? '' : 'none' }}
			className='fixed top-0 left-0 w-[100vw] min-h-[100vh] bg-yellow-400 z-[2000]'
		></div>
	);
};

export default FolioMenu;
