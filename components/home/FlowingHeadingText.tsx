import { ReactNode } from 'react';
import FlowingTextUnit from './FlowingTextUnit';

const FlowingHeadingText = ({
	children,
	className,
	...rest
}: {
	children: ReactNode;
	className?: string;
}) => {
	const flowHtml = (): ReactNode[] => {
		const output: ReactNode[] = [];

		for (let i = 0; i < 4; i++) {
			output.push(
				<FlowingTextUnit key={i}>
					{children}
				</FlowingTextUnit>
			);
		}

		return output;
	};

	return (
		<div className='mt-[8vh] overflow-hidden' {...rest}>
			<h1
				className={`${className} sm:text-[4rem] md:text-[6rem] xl:text-[7rem]
				whitespace-nowrap uppercase hidden sm:flex sm:flex-row`}
                style={{transform: 'translateX(-100%)'}}
			>
				{flowHtml()}
			</h1>
		</div>
	);
};

export default FlowingHeadingText;
