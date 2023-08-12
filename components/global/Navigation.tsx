import FolioRoutes from '@/routes';
import NavLink from './navigationItems/NavLink';
import AppLink from '../common/AppLink';

const Navigation = () => {
	return (
		<nav className='navigation w-[90%] flex flex-row items-center justify-between'>
			<AppLink className='uppercase' href={FolioRoutes.Home}>folio - 2023</AppLink>

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
