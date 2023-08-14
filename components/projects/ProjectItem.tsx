'use client'

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactNode } from 'react';

type ProjectItemProps = {
    children: ReactNode;
    title: string;
    value: string;
    i: number;
}

const ProjectItem = ({ children, title, i, ...props } : ProjectItemProps) => {

    function onClickEvent() {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500)
    }

	return (
		<AccordionItem className='border-[#717171]' {...props}>
			<AccordionTrigger
                onClick={() => onClickEvent()}
                className='duration-0 group text-6xl font-light hover:no-underline'>
                <span>
                    <span className='text-lg text-[#939393] me-3'>0{i}</span>
                    <span className='text-[#b5b5b5] group-hover:text-white group-hover:italic'>{title}</span>
                </span>
            </AccordionTrigger>
			<AccordionContent>
				{children}
			</AccordionContent>
		</AccordionItem>
	);
};

export default ProjectItem;
