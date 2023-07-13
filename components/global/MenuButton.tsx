import { HiOutlineBars3BottomRight } from 'react-icons/hi2';

type MenuBtnProps = {
	text: string;
};

const MenuButton = ({ text, ...args }: MenuBtnProps) => {
	return (
		<button
			className='group/menu-btn menu-button md:hidden
			rounded-full border-[#8e8d8d92] border-[1px]
			overflow-hidden
			md:px-[6%] py-[1.3vh] px-[20%] md:ms-auto mb-[40px] mt-[30px]
			relative'
			{...args}
		>
			<span className='on-hover-bg absolute left-0 top-0 w-full h-full hidden sm:inline'></span>

			<HiOutlineBars3BottomRight className='sm:hidden text-[2rem]' />
			<span className='hidden sm:inline text-[#c1c1c1] group-hover/menu-btn:text-black capitalize
			text-[2rem] transition-colors duration-200'>
				{text}
			</span>
		</button>
	);
};

export default MenuButton;
