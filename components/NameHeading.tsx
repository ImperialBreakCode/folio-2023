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
			className={`${CormorantGaramond.className} ${className} lg:text-[5rem] 2xl:text-[5.5rem] capitalize font-light mx-[10%] mt-[11vh]`}
		>
			{children}
		</h2>
	);
};

export default NameHeading;
