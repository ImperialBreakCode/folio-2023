import { DM_Sans, Cormorant_Garamond, Poppins } from 'next/font/google';

export const DMSans = DM_Sans({
	weight: '400',
	subsets: ['latin']
});

// export const PoppinsFont = Poppins({
// 	weight: ['300' ,'400'],
// 	subsets: ['latin']
// });

export const CormorantGaramond = Cormorant_Garamond({
	weight: ['300', '600'],
	style: ['italic', 'normal'],
	subsets: ['latin']
});
