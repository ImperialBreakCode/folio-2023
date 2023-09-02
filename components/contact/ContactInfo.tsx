import { ReactNode } from "react";

const ContactInfo = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => {
    return (
        <div className='my-10 p-5 border-b-[1px] border-[#878787]'>
            <h2 className='text-xl uppercase font-light'>{title}</h2>
            <p className='text-5xl'>{children}</p>
        </div>
    );
};

export default ContactInfo;