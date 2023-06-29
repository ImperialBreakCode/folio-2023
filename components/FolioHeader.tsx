type FolioHeaderProps = {
	children: React.ReactNode;
};

const FolioHeader = ({ children }: FolioHeaderProps) => {
	return <header className='py-[8vh] px-20 fixed w-full flex flex-row top-0'>{children}</header>;
};

export default FolioHeader;
