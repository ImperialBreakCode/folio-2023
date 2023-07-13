type HeaderProps = {
	children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
	return (
		<header data-scroll-section className='md:py-[5vh] md:px-20
		w-full flex flex-row top-0 justify-center'>
			{children}
		</header>
	);
};

export default Header;
