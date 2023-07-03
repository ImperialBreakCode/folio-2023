import FlowingHeadingText from '@/components/FlowingHeadingText';
import NameHeading from '@/components/NameHeading';
import styles from './styles.module.scss';
import MobileHeading from '@/components/MobileHeading';

export default function Home() {
	return (
		<main>
			<section>

				<MobileHeading>
					Software <br /> engineer <br /> student
				</MobileHeading>

				<NameHeading
					className={styles['heading-name']}
					firstName='Christopher'
					secondFirstName='Alexander'
					lastName='Petrov'
				/>

				<FlowingHeadingText className={styles['flow-text']}>
					<i>Software</i> engineer student →&#160;
				</FlowingHeadingText>
			</section>
		</main>
	);
}
