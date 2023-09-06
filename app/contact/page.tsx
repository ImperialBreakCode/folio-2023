'use client';

import PageWrapper from '@/components/common/PageWrapper';
import ContactInfo from '@/components/contact/ContactInfo';
import { CormorantGaramond } from '../fonts';
import ContactButton from '@/components/contact/ContactButton';

import { GrLinkNext } from 'react-icons/gr';
import { GrLinkDown } from 'react-icons/gr';

import styles from './styles.module.scss';

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

                <div className='flex flex-row items-center justify-center mb-24 px-10'>
                    <ContactButton>
                        download cv{' '}
                        <GrLinkDown className='invert group-hover:invert-0 inline duration-200 transition-all' />
                    </ContactButton>
                    <ContactButton>
                        My github{' '}
                        <GrLinkNext className='invert group-hover:invert-0 inline duration-200 transition-all' />
                    </ContactButton>
                </div>

                <h2 className='ps-20 text-9xl mb-10'>Information </h2>

                <div className='p-5 flex flex-row'>

                    <div className='w-1/2 flex flex-col justify-center'>
                        <div className='ps-20 py-5'>
                            <h2 className='uppercase font-light'>based in</h2>
                            <p className='underline italic text-xl'>Veliko Tarnovo, Bulgaria</p>
                        </div>
                        <div className='ps-20 py-5'>
                            <h2 className='uppercase font-light'>student at</h2>
                            <p className='underline italic text-xl'>University of Veliko Tarnovo</p>
                        </div>
                    </div>

                    <div className={`w-1/2 ${styles.lightSection}`}>
                        <ContactInfo title='email'>email@gmail.com</ContactInfo>
                        <ContactInfo title='phone'>08808880</ContactInfo>
                    </div>
                    
                </div>
            </div>
        </PageWrapper>
    );
}
