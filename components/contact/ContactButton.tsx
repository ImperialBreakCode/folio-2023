import { ReactNode } from 'react';

const ContactButton = ({ children }: { children: ReactNode }) => {
    return (
        <a
            href='#'
            className='border-t-[1px] border-[#878787] w-full p-4 mx-4 relative group'
        >
            <span
                className='text-2xl relative z-10 
                group-hover:text-black transition-colors duration-200'
            >
                {children}
            </span>
            <span
                className='bg-[#bfbfbf] absolute top-0 left-0 h-0 w-full 
                group-hover:h-full transition-all duration-200 inline-block'
            ></span>
        </a>
    );
};

export default ContactButton;
