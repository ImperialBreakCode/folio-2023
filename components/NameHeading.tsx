import { CormorantGaramond } from '@/app/fonts';

const NameHeading = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h2
			className={`${CormorantGaramond.className} ${className}
			text-[4.5rem] md:text-[5rem] 2xl:text-[5.5rem] capitalize font-light mx-[10%] md:mt-[11vh]`}
		>
			{children}
		</h2>
	);
};

export default NameHeading;
