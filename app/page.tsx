import FlowingHeadingText from '@/components/FlowingHeadingText';
import NameHeading from '@/components/NameHeading';
import styles from './styles.module.scss';

export default function Home() {
	return (
		<main>
			<NameHeading className={styles['heading-name']}>
				Christopher <br /> Alexander <br /> Petrov
			</NameHeading>

			<FlowingHeadingText className={styles['flow-text']} count={2}>
				<i>Software</i> engineer student → {' '}
			</FlowingHeadingText>
		</main>
	);
}
