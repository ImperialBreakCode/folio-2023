import { ReactNode } from 'react';

type SkillSectionProps = {
	title: string;
	light?: boolean;
	children: ReactNode;
	rows?: number;
};

const SkillSection = ({ children, title, light, rows = 2 }: SkillSectionProps) => {

	return (
		<section className='px-2 sm:px-4'>
			<div className={`${light ? 'bg-main-light' : ''} p-5 sm:p-10 pb-20 group`}>
				<h2 className={`text-5xl sm:text-7xl uppercase ${light ? 'text-end' : ''} mb-20`}>{title}</h2>
				<div className={`grid grid-cols-2 lg:grid-cols-3 grid-rows-${rows} gap-x-20 md:gap-x-36 gap-y-20 px-5 sm:px-10`}>
					{children}
				</div>
			</div>
		</section>
	);
};

export default SkillSection;
