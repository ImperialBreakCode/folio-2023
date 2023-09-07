import { ReactNode } from 'react';


const ContactButton = ({ children }: { children: ReactNode }) => {
    return (
        <a
            href='#'
            className='text-center lg:text-start border-t-[1px] border-[#878787] 
                w-full p-5 lg:p-10 mb-5 sm:mb-0 sm:mx-4 relative group'
        >
            <span
                className='sm:text-2xl lg:text-4xl relative z-10 uppercase
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
