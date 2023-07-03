import { CormorantGaramond } from '@/app/fonts';

type NameHeadingProps = {
	firstName: string;
	secondFirstName: string;
	lastName: string;
	className?: string;
};

const NameHeading = ({
	firstName,
	secondFirstName,
	lastName,
	className,
}: NameHeadingProps) => {
	return (
		<div
			className={`${CormorantGaramond.className} ${className}
			text-[4.5rem] 2xl:text-[5.5rem] capitalize font-light flex flex-col items-center
			mt-[10vh] sm:italic`}
		>
			<h2 style={{ transform: 'translateX(-80%)' }}>{firstName}</h2>

			<h2>{secondFirstName}</h2>

			<h2 style={{ transform: 'translateX(130%)' }}>{lastName}</h2>
		</div>
	);
};

export default NameHeading;
