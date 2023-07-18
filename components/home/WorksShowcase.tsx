import { CormorantGaramond, DMSans } from '@/app/fonts';

type WorksProps = {
	className: string;
};

const WorksShowcase = ({ className }: WorksProps) => {
	return (
		<div className={`h-full ${className}`}>
			<div className='py-12 px-32'>
				<h3
					className={`text-5xl font-semibold ${CormorantGaramond.className}`}
				>
					My Works
				</h3>
			</div>
			<div className='flex flex-row'>
				<div className='w-1/3 px-28 pt-12'>
					<h4 className={`text-8xl italic ${DMSans.className}`}>Solaris</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque ex velit, posuere vitae erat sit amet, condiment
						um dictum diam.
					</p>
				</div>
				<div className='w-2/3'>
					<p>img</p>
					<p>img</p>
					<p>img</p>
					<p>img</p>
					<p>img</p>
				</div>
			</div>
			<div>
				<p>footer</p>
			</div>
		</div>
	);
};

export default WorksShowcase;
