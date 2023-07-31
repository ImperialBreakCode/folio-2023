import { ReactNode } from 'react';
import FlowingTextUnit from './FlowingTextUnit';

const FlowingText = ({
	children,
	className,
	heading,
	normalFlow,
	...rest
}: {
	children: ReactNode;
	className?: string;
	heading?: boolean;
	normalFlow?: boolean;
}) => {

	const flowHtml = (): ReactNode[] => {
		const output: ReactNode[] = [];

		for (let i = 0; i < 4; i++) {
			output.push(<FlowingTextUnit normalFlow={normalFlow} key={i}>{children}</FlowingTextUnit>);
		}

		return output;
	};

	const classStyles = `sm:text-[4rem] md:text-[6rem] xl:text-[7rem] whitespace-nowrap uppercase hidden sm:flex sm:flex-row ${className}`;

	return (
		<div className='sm:mt-[8vh] overflow-hidden' {...rest}>

			{heading ?
				<h1 className={classStyles} style={{ transform: 'translateX(-100%)' }}>
					{flowHtml()}
				</h1>
				:
				<h3 className={classStyles} style={{ transform: 'translateX(-50%)' }}>
					{flowHtml()}
				</h3>
			}

		</div>
	);
};

export default FlowingText;
