'use client'

import PageWrapper from '@/components/common/PageWrapper';
import ContactInfo from '@/components/contact/ContactInfo';
import { CormorantGaramond } from '../fonts';
import ContactButton from '@/components/contact/ContactButton';

export default function Contact() {
    return (
        <PageWrapper>
            <div>
                <h1
                    className={`text-9xl uppercase ms-10 mt-10 mb-20 ${CormorantGaramond.className}`}
                >
                    Get in touch
                </h1>

                <div className='flex flex-row items-center justify-center mb-4'>
                    <ContactButton>download cv</ContactButton>
                    <ContactButton>My github</ContactButton>
                </div>

                <div className='p-5'>
                    <ContactInfo title='email'>email@gmail.com</ContactInfo>
                    <ContactInfo title='phone'>08808880</ContactInfo>
                </div>
            </div>
        </PageWrapper>
    );
}
