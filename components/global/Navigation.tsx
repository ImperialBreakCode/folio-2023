import FolioRoutes from '@/routes';
import Link from 'next/link';
import NavLink from './navigationItems/NavLink';

const Navigation = () => {
	return (
		<nav className='navigation w-[90%] flex flex-row items-center justify-between'>
			<Link className='uppercase' href={FolioRoutes.Home}>folio - 2023</Link>

			<ul className='flex flex-row'>
				<NavLink href={FolioRoutes.Home} text='Home'/>
				<NavLink href={FolioRoutes.Projects} text='Projects'/>
				<NavLink href={FolioRoutes.About} text='About me'/>
				<NavLink href={FolioRoutes.Contact} text='Contact me'/>
			</ul>
		</nav>
	);
};

export default Navigation;
