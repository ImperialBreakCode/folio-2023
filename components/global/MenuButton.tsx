import { HiOutlineBars3BottomRight } from 'react-icons/hi2';

type MenuBtnProps = {
	text: string;
	smallScreens: boolean;
	id: string;
};

const MenuButton = ({ text, smallScreens, id, ...args }: MenuBtnProps) => {
	return (
		<button
			id={id}
			className={`group/menu-btn menu-button
			rounded-full border-[#cfcfcf92] border-[1px]
			overflow-hidden transition-all duration-500
			md:px-[6%] py-[1.3vh] px-[20%] md:ms-auto mb-[40px] mt-[30px]
			${smallScreens ? 'md:hidden relative' : 'hidden md:inline fixed top-20 right-10 z-[1000]'}`}
			{...args}
		>
			<span className='on-hover-bg absolute left-0 top-0 w-full h-full hidden sm:inline'></span>

			<HiOutlineBars3BottomRight className='sm:hidden text-[2rem]' />
			<span className='hidden sm:inline text-[#e8e8e8] group-hover/menu-btn:text-black capitalize
			text-[2rem] transition-colors duration-200'>
				{text}
			</span>
		</button>
	);
};

export default MenuButton;
