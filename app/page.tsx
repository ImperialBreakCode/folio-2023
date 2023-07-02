import FlowingHeadingText from '@/components/FlowingHeadingText';
import NameHeading from '@/components/NameHeading';
import styles from './styles.module.scss';

export default function Home() {
	return (
		<main>
			<section>
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
