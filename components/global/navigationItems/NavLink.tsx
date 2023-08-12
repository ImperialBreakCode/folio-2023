'use client'

import AppLink from '@/components/common/AppLink';
import FolioRoutes from '@/routes';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type NavLinkProps = {
    text: string;
    href: FolioRoutes;
}

const NavLink = ({ text, href } : NavLinkProps) => {

    const path = usePathname();
    const [ activeState, setActiveState ] = useState(false);

    useEffect(() => {

        const isActive = href == path;

        if (activeState !== isActive) {
            setActiveState(isActive);
        }

    }, [path])

    return (
        <li className={`nav-btn ${activeState ? 'nav-active': ''}`}>
			<AppLink href={href}>{text}</AppLink>
	    </li>
    );
}

export default NavLink;