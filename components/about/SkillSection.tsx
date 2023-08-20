import { ReactNode } from 'react';

type SkillSectionProps = {
	title: string;
	light?: boolean;
	children: ReactNode;
	rows?: number;
};

const SkillSection = ({ children, title, light, rows = 2 }: SkillSectionProps) => {

	return (
		<section className='px-4'>
			<div className={`${light ? 'bg-main-light' : ''} p-10 pb-20 group`}>
				<h2 className={`text-7xl uppercase ${light ? 'text-end' : ''} mb-20`}>{title}</h2>
				<div className={`grid grid-cols-3 grid-rows-${rows} gap-x-36 gap-y-20 px-10`}>
					{children}
				</div>
			</div>
		</section>
	);
};

export default SkillSection;
