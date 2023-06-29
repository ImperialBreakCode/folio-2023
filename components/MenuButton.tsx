type MenuBtnProps = {
	text: string;
};

const MenuButton = ({ text, ...args }: MenuBtnProps) => {
	return (
		<button
			className='menu-button text-[#a1a1a1] hover:text-black capitalize text-[2rem]
			rounded-full border-[#616161c8]
			border-[1px] overflow-hidden px-[6%] py-[1.3vh] ms-auto relative
			transition-colors duration-200'
			{...args}
		>
			<span className='absolute left-0 top-0 w-full h-full'></span>
			{text}
		</button>
	);
};

export default MenuButton;
