import { ReactNode } from "react";

const ContactInfo = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => {
    return (
        <div className='my-5 lg:my-10 border-b-[1px] border-[#878787] flex flex-row p-5 lg:p-10'>
            <h2 className='text-sm lg:text-lg uppercase pe-2 lg:pe-4'>{title}</h2>
            <p className='text-2xl lg:text-4xl font-light underline'>{children}</p>
        </div>
    );
};

export default ContactInfo;