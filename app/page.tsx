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

			<section className='mt-10'>
				<div className='px-20 py-10 flex flex-row'>
					<div className='w-[34%]'>smth</div>
					<div className='w-[7%] pt-2'>
						<p className='uppercase text-[#acacac]'>about me</p>
					</div>
					<div className='w-[59%]'>
						<p className='text-[#b6b6b6] text-5xl w-5/6 leading-[3.4rem]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Vestibulum vel diam auctor, fermentum quam nec, mollis
							enim. Nulla condimentum leo at arcu commodo, ac tempor
							ligula porta. Interdum et malesuada fames ac ante ipsum
							primis in faucibus. Cras sollicitudin, tellus non
							consectetur viverra, eros lorem vestibulum arcu, et
							bibendum nulla augue scelerisque velit. Proin ultrices
							at odio quis vehicula. Proin pretium, enim id dapibus
							pharetra, magna ex aliquet eros, sed tincidunt ipsum
							quam sed velit. Integer consectetur diam sit amet quam
							consequat commodo.
						</p>

					</div>
				</div>
			</section>
		</main>
	);
}
