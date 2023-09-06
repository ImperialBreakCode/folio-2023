'use client';

import PageWrapper from '@/components/common/PageWrapper';
import ContactInfo from '@/components/contact/ContactInfo';
import { CormorantGaramond } from '../fonts';
import ContactButton from '@/components/contact/ContactButton';

import { TfiDownload } from 'react-icons/tfi';
import { GrLinkNext } from 'react-icons/gr';
import { GrLinkDown } from 'react-icons/gr';

export default function Contact() {
    return (
        <PageWrapper>
            <div>
                <h1
                    className={`text-9xl uppercase ms-10 mt-10 mb-36 text-center ${CormorantGaramond.className}`}
                >
                    <span className='translate-x-[-50%] inline-block'>Get in</span> 
                    <br /> 
                    <span className='translate-x-[20%] inline-block'>touch</span>
                </h1>

                <div className='flex flex-row items-center justify-center mb-4 px-10'>
                    <ContactButton>
                        download cv{' '}
                        <GrLinkDown className='invert group-hover:invert-0 inline duration-200 transition-all' />
                    </ContactButton>
                    <ContactButton>
                        My github{' '}
                        <GrLinkNext className='invert group-hover:invert-0 inline duration-200 transition-all' />
                    </ContactButton>
                </div>

                <div className='p-5'>
                    <ContactInfo title='email'>email@gmail.com</ContactInfo>
                    <ContactInfo title='phone'>08808880</ContactInfo>
                </div>
            </div>
        </PageWrapper>
    );
}
