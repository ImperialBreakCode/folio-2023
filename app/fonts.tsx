import { DM_Sans, Cormorant_Garamond, Karla } from 'next/font/google';

export const DMSans = DM_Sans({
	weight: '400',
	style: ['normal', 'italic'],
	subsets: ['latin']
});

export const CormorantGaramond = Cormorant_Garamond({
	weight: '300',
	style: 'italic',
	subsets: ['latin']
});
