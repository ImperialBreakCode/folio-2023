'use client'

import { ReactNode } from 'react';

type PageWrapperProps = {
	children: ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
	return (
		<main data-scroll-section>{children}</main>
	);
};

export default PageWrapper;
