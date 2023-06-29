type FolioHeaderProps = {
	children: React.ReactNode;
};

const FolioHeader = ({ children }: FolioHeaderProps) => {
	return <header className='py-[50px] px-20 fixed w-full flex flex-row'>{children}</header>;
};

export default FolioHeader;
