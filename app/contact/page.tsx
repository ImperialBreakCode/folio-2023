import PageWrapper from '@/components/common/PageWrapper';
import { CormorantGaramond } from '../fonts';
import { ReactNode } from 'react';

export default function Contact() {
    return (
        <PageWrapper>
            <div>
                <h1
                    className={`text-9xl uppercase ms-10 my-10 ${CormorantGaramond.className}`}
                >
                    Get in touch
                </h1>
                <div className='bg-light-color w-2/3 translate-x-[40%] p-5'>
                    <ContactInfo title='download my cv'>
                        <a className='underline' href="#">Download it damnit</a>
                    </ContactInfo>
                    <ContactInfo title='email'>
                        email@gmail.com
                    </ContactInfo>
                    <ContactInfo title='phone'>
                        08808880
                    </ContactInfo>
                    <ContactInfo title='github'>
                        <a className='underline' href="#">da link!!!</a>
                    </ContactInfo>
                </div>
            </div>
            
        </PageWrapper>
    );
}

const ContactInfo = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => {
    return (
        <div className='my-10 p-5 border-b-[1px] border-black'>
            <h2 className='text-xl uppercase font-light'>{title}</h2>
            <p className='text-5xl'>{children}</p>
        </div>
    );
};
