import { ReactNode } from 'react';

type AboutInfoBoxtProps = {
	children: ReactNode;
	i: number;
	title: string;
};

const AboutInfoBox = ({ children, i, title }: AboutInfoBoxtProps) => {
	return (
		<div className='mx-10 w-[25%]'>
			<div className='pb-4 mb-4 text-4xl border-b-[1px] border-[#3e3e3e] capitalize text-[#f0f0f0] font-light'>
				<span className='color-highlight'>0{i}</span> - {title}
			</div>
            <div className='text-[#c0c0c0] text-xl'>
                {children}
            </div>
		</div>
	);
};

export default AboutInfoBox;
