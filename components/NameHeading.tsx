import { CormorantGaramond } from '@/app/fonts';

const NameHeading = ({ children, ...args }: { children: React.ReactNode }) => {
	return (
		<h2
			className={
				CormorantGaramond.className +
				' heading-name text-[11vh] capitalize font-light absolute left-[11%] top-[10%]'
			}
			{...args}
		>
			{children}
		</h2>
	);
};

export default NameHeading;
