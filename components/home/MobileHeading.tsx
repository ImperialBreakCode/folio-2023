import { ReactNode } from 'react';

const MobileHeading = ({ children }: { children: ReactNode }) => {
	return (
        <h1 className='sm:hidden text-[4rem] uppercase my-[40px] text-center leading-tight'>
            {children}
        </h1>
    );
};

export default MobileHeading;
