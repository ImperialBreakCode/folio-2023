import { ReactNode } from 'react';

type AboutInfoBoxtProps = {
	children: ReactNode;
	i: number;
	title: string;
};

const AboutInfoBox = ({ children, i, title }: AboutInfoBoxtProps) => {
	return (
		<div className='mb-20 lg:mb-0 lg:mx-10 sm:w-[75%] lg:w-[25%]'>
			<div className='pb-4 mb-4 text-4xl border-b-[1px] border-[#3e3e3e] capitalize text-[#f0f0f0] font-light'>
				<span className='color-highlight'>0{i}</span> - {title}
			</div>
            <div className='text-[#c0c0c0] sm:text-xl'>
                {children}
            </div>
		</div>
	);
};

export default AboutInfoBox;
