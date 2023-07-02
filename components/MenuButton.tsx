type MenuBtnProps = {
	text: string;
};

const MenuButton = ({ text, ...args }: MenuBtnProps) => {
	return (
		<button
			className='menu-button md:hidden
			text-[#c1c1c1] hover:text-black capitalize sm:text-[2rem]
			rounded-full border-[#8e8d8d92] border-[1px]
			overflow-hidden
			md:px-[6%] py-[1.3vh] px-[20%] md:ms-auto mb-[40px] mt-[30px]
			relative
			transition-colors duration-200'
			{...args}
		>
			<span className='absolute left-0 top-0 w-full h-full'></span>
			{text}
		</button>
	);
};

export default MenuButton;
