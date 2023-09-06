import { ReactNode } from "react";

const ContactInfo = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => {
    return (
        <div className='my-10 border-b-[1px] border-[#878787] flex flex-row p-10'>
            <h2 className='text-lg uppercase pe-4'>{title}</h2>
            <p className='text-4xl font-light underline'>{children}</p>
        </div>
    );
};

export default ContactInfo;