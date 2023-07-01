type HeaderProps = {
	children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
	return (
		<header className='md:py-[8vh] md:px-20 md:fixed
		w-full flex flex-row top-0 justify-center'>
			{children}
		</header>
	);
};

export default Header;
