import Link from 'next/link';

const Navigation = () => {
	return (
		<nav className='navigation w-[80%] flex flex-row items-center justify-between'>
			<Link className='uppercase' href='#'>folio - 2023</Link>

			<ul className='flex flex-row'>
				<li className='nav-btn nav-active'>
					<Link href='/'>Home</Link>
				</li>
				<li className='nav-btn'>
					<Link href='#'>Works</Link>
				</li>
				<li className='nav-btn'>
					<Link href='#'>About me</Link>
				</li>
				<li className='nav-btn'>
					<Link href='#'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
