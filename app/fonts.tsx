import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import localFont from 'next/font/local';

export const DMSans = DM_Sans({
	weight: '400',
	subsets: ['latin'],
});

export const DMSansLocal = localFont({
	src: '../fonts/dm_sans/DMSans.ttf',
	style: 'noraml',
});

export const DMSansItalic = localFont({
	src: '../fonts/dm_sans/DMSans-Italic.ttf',
	style: 'italic',
});

export const CormorantGaramond = Cormorant_Garamond({
	weight: ['300', '600'],
	style: ['italic', 'normal'],
	subsets: ['latin']
});
